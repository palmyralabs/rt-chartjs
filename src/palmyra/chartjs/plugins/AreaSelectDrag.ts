import { Chart as ChartRef } from "chart.js";

// Store chart data
const states = new WeakMap();
const getState = (chart): ISelectionState => {
    const state = states.get(chart);
    return state || null;
}

interface IPoint {
    axisValue?: any,
    axisIndex?: number,
    x: number,
    y: number,
    xValue?: number,
    yValue?: number
}

interface ISelectionState {
    selectionXY: {
        state: 'none' | 'mousedown' | 'drag',
        start?: IPoint,
        end?: IPoint
    }
}

const setState = (chart, updatedState: ISelectionState) => {
    const originalState = getState(chart);
    states.set(chart, Object.assign({}, originalState, updatedState));
    return updatedState;
}

// Store options
const pluginOptions = {
    colors: {
        selection: "#e8eff6", selectedElements: "#1f77b4", unselectedElements: "#cccccc"
    }
};


const getPoints = (chart: ChartRef, evt) => {
    var ytop = chart.chartArea.top;
    var ybottom = chart.chartArea.bottom;
    var ymin = chart.scales['y'].min;
    var ymax = chart.scales['y'].max;
    var newy = -1;
    var showstuff = 0;
    if (evt.offsetY <= ybottom && evt.offsetY >= ytop) {
        newy = Math.abs((evt.offsetY - ytop) / (ybottom - ytop));
        newy = (newy - 1) * -1;
        newy = newy * (Math.abs(ymax - ymin)) + ymin;
        showstuff = 1;
    }
    var xtop = chart.chartArea.left;
    var xbottom = chart.chartArea.right;
    var xmin = chart.scales['x'].min;
    var xmax = chart.scales['x'].max;
    var newx = -1;
    if (evt.offsetX <= xbottom && evt.offsetX >= xtop && showstuff == 1) {
        newx = Math.abs((evt.offsetX - xtop) / (xbottom - xtop));
        newx = newx * (Math.abs(xmax - xmin)) + xmin;
    }
    return { x: newx, y: newy };
}

// Export main plugin
const AreaSelectDrag = {
    id: "areaSelectdrag",

    start: (chart: ChartRef, _args, options) => {
        // Check if enabled
        //@ts-ignore
        if (!chart?.config?.options?.plugins?.selectdrag?.enabled) {
            return;
        }

        // Get chart canvas
        const canvasElement = chart.canvas;

        // Draw begin
        canvasElement.addEventListener("mousedown", (e) => {
            // Get elements

            const axisElements = getAxisElements(e);

            if (!axisElements || axisElements.length === 0) {
                setState(chart, {
                    selectionXY: {
                        state: 'mousedown'
                    }
                });
                return;
            }

            // Get axis value
            const axisIndex = chart.getElementsAtEventForMode(e, "nearest", { intersect: false }, false)[0].index;
            const axisValue = chart.data.labels[axisIndex];


            const point = getPoints(chart, e);
            // Set selection origin
            setState(chart, {
                selectionXY: {
                    state: 'drag',
                    start: {
                        axisValue, axisIndex,
                        x: e.offsetX, y: e.offsetY,
                        xValue: point.x, yValue: point.y
                    }
                }
            });
        });

        const getAxisElements = (e) => {
            try {
                return chart.getElementsAtEventForMode(e, "index", { intersect: false }, false)
            } catch (e) {

            }
        }

        // Draw end
        window.addEventListener("mouseup", (e) => {
            // Check drawing status
            const state = getState(chart);
            if (!state || state?.selectionXY?.state == 'none') {
                return;
            }

            // Get axis value
            const axisElements = getAxisElements(e);
            if (null == axisElements)
                return;

            const axisIndex = axisElements.length > 0 ? axisElements[0].index : chart.data.labels.length - 1;
            const axisValue = chart.data.labels[axisIndex];

            // Check values & set end origin
            if (state.selectionXY.start.axisValue > axisValue) {
                // Switch values - user has selected opposite way
                state.selectionXY.end = JSON.parse(JSON.stringify(state.selectionXY.start));
                state.selectionXY.start = { axisValue, axisIndex, x: e.offsetX, y: e.offsetY }
            } else {
                // Set end origin
                state.selectionXY.end = { axisValue, axisIndex, x: e.offsetX, y: e.offsetY };
            }

            // End drawing
            state.selectionXY.state = 'none';
            setState(chart, state);
            const point = getPoints(chart, e);
            state.selectionXY.end.xValue = point.x;
            state.selectionXY.end.yValue = point.y;

            // Render rectangle
            chart.update();

            // Emit event
            //@ts-ignore
            const selectCompleteCallback = chart?.config?.options?.plugins?.selectdrag?.onSelectComplete;
            if (selectCompleteCallback) {                
                const {start, end} = state.selectionXY;
                const xDiff = Math.abs(start.x - end.x)
                const yDiff = Math.abs(start.y - end.y);
                //@ts-ignore
                const MIN_DIFF = chart?.config?.options?.plugins?.selectdrag?.threshold || 10;
                if(xDiff < MIN_DIFF || yDiff < MIN_DIFF)
                    return; // Area too small, do not callback.


                selectCompleteCallback({
                    range: [
                        state.selectionXY.start.axisValue,
                        state.selectionXY.end.axisValue
                    ],
                    boundingBox: [
                        state.selectionXY.start,
                        [
                            state.selectionXY.end.x,
                            state.selectionXY.start.y,
                        ],
                        state.selectionXY.end,
                        [
                            state.selectionXY.start.x,
                            state.selectionXY.end.y,
                        ]
                    ],
                    coordinates: {
                        start: {
                            x: state.selectionXY.start.xValue,
                            y: state.selectionXY.start.yValue
                        }, end: {
                            x: state.selectionXY.end.xValue,
                            y: state.selectionXY.end.yValue
                        }
                    }
                });
            }
        });

        // Draw extend
        canvasElement.addEventListener("mousemove", (e) => {
            // Check drawing status
            const state = getState(chart);

            if (!state || state?.selectionXY?.state == 'none' || null == chart.canvas) {
                return;
            }
            if (state.selectionXY.state == 'mousedown') {
                const axisElements = getAxisElements(e);
                if (null != axisElements) {
                    state.selectionXY.state = 'drag';
                }
            }

            // Set end origin
            state.selectionXY.end = { x: e.offsetX, y: e.offsetY };
            chart.render();
            setState(chart, state);
        });
    },

    beforeUpdate: (chart, args, options) => {
        // Check if enabled
        if (!chart?.config?.options?.plugins?.selectdrag?.enabled) {
            return;
        }

        // Check drawing status
        // const state = getState(chart);

        // Set highlighted
        // chart.data.datasets = chart.data.datasets.map((dataset) => {
        //     dataset.backgroundColor = chart.data.labels.map((value, index) => {
        //         if (!state || !state?.selectionXY?.start?.x || !state?.selectionXY?.end?.x) {
        //             // Show default
        //             return pluginOptions.colors.selectedElements;
        //         } else {
        //             // Show selected/unselected
        //             if (index >= state.selectionXY.start?.axisIndex && index <= state.selectionXY.end?.axisIndex) {
        //                 return pluginOptions.colors.selectedElements;
        //             } else {
        //                 return pluginOptions.colors.unselectedElements;
        //             }
        //         }
        //     });
        //     return dataset;
        // });
    },

    afterDraw: (chart, args, options) => {
        // Check drawing status
        const state = getState(chart);
        if (!state || (state?.selectionXY?.state == 'none' && !state.selectionXY.end?.x)) {
            return;
        }

        // Save canvas state
        const { ctx } = chart;
        ctx.save();

        // Draw user rectangle
        ctx.globalCompositeOperation = "destination-over";

        // Draw selection
        ctx.fillStyle = pluginOptions.colors.selection;
        ctx.fillRect(
            (state.selectionXY.start?.x || 0), (state.selectionXY.start?.y || chart.chartArea.top),
            (state.selectionXY.end?.x || 0) - (state.selectionXY.start?.x || 0),
            ((state.selectionXY.end?.y - state.selectionXY.start?.y) || 0)
        );

        // Restore canvas
        ctx.restore();
    },

    setSelection: (chart, range = []) => {
        // Check has data
        if (chart.data.labels.length === 0 || chart.data.datasets.length === 0) {
            return;
        }

        // Check if new data blank
        if (range.length === 0) {
            // Clear selection
            setState(chart, null);
            chart.update();
        }

        // Create state
        const state: ISelectionState = {
            selectionXY: {
                state: 'none'
            }
        };

        // Set start axis
        const startAxisIndex = chart.data.labels.findIndex((item) => item === range[0]);
        state.selectionXY.start = {
            axisValue: range[0],
            axisIndex: startAxisIndex,
            x: chart.scales.x.getPixelForValue(chart.data.labels[startAxisIndex]),
            y: 0
        }

        // Set end axis
        const endAxisIndex = chart.data.labels.findIndex((item) => item === range[1]);
        state.selectionXY.end = {
            axisValue: range[0],
            axisIndex: endAxisIndex,
            x: chart.scales.x.getPixelForValue(chart.data.labels[endAxisIndex]),
            y: chart.chartArea.height
        }

        setState(chart, state);
        chart.update();
    },

    clearSelection: (chart) => {
        // Clear state
        setState(chart, null);
        chart.update();
    }
}

export { AreaSelectDrag }