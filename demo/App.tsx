import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import './themes/Layout.css';
import './themes/colorDef.css';
import './themes/blue/Colors.css';
import HomePage from "./pages/HomePage";
import { MainLayout } from "./layout/main/MainLayout";
import SimpleChartPage from "./pages/SimpleChartPage";
import BarChartPage from "./pages/barCharts/BarChartPage";
import GroupedBarChartPage from "./pages/groupedBarCharts/GroupedBarChartPage";
import StackedBarChartPage from "./pages/StackedBarCharts/StackedBarChartPage";
import LineChartPage from "./pages/lineCharts/LineChartPage";
import MultiLineBarChartPage from "./pages/lineCharts/MultiLineBarChartPage";
import DoughnutChartPage from "./pages/doughnutCharts/DoughnutChartPage";
import PieChartPage from "./pages/pieCharts/PieChartPage";
import PolarAreaChartPage from "./pages/polarAreaCharts/PolarAreaChartPage";
import RadarChartPage from "./pages/radarCharts/RadarChartPage";
import ScatterChartPage from "./pages/scatterCharts/ScatterChartPage";
import BubbleChartPage from "./pages/bubbleCharts/BubbleChartPage";
import LineChartDefnPage from "./pages/Definition/LineChartDefnPage";
import BarChartDefnPage from "./pages/Definition/BarChartDefnPage";
import { InitialSetup } from "./pages/InitialSetup";
import MultiLineChartDefnPage from "./pages/Definition/MultiLineChartDefnPage";
import DoughnutChartDefnPage from "./pages/Definition/DoughnutChartDefnPage";
import PieChartDefnPage from "./pages/Definition/PieChartDefnPage";
import PolarAreaChartDefnPage from "./pages/Definition/PolarAreaDefnPage";
import RadarChartDefnPage from "./pages/Definition/RadarDefnPage";
import BubbleChartDefnPage from "./pages/Definition/BubbleChartDefnPage";
import ScatterChartDefnPage from "./pages/Definition/ScatterChartDefnPage";
import StackedBarChartDefnPage from "./pages/Definition/StackedBarChartDefnPage";
import GroupedBarChartDefnPage from "./pages/Definition/GroupedBarChartDefnPage";



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout appTitle='Chart Demo' />} >
            <Route path="/home" element={<HomePage />} />
            <Route path="/initialSetup" element={<InitialSetup />} />
            <Route path="/simpleChart" element={<SimpleChartPage />} />
            <Route path="/simpleChart/barChart" element={<BarChartPage />} />
            <Route path="/simpleChart/groupedBarChart" element={<GroupedBarChartPage />} />
            <Route path="/simpleChart/stackedBarChart" element={<StackedBarChartPage />} />
            <Route path="/simpleChart/lineChart" element={<LineChartPage />} />
            <Route path="/simpleChart/multiLineChart" element={<MultiLineBarChartPage />} />
            <Route path="/simpleChart/doughnutChart" element={<DoughnutChartPage />} />
            <Route path="/simpleChart/pieChart" element={<PieChartPage />} />
            <Route path="/simpleChart/polarAreaChart" element={<PolarAreaChartPage />} />
            <Route path="/simpleChart/radarChart" element={<RadarChartPage />} />
            <Route path="/simpleChart/scatterChart" element={<ScatterChartPage />} />
            <Route path="/simpleChart/bubbleChart" element={<BubbleChartPage />} />

            <Route path="/chartTypes/props/lineChart" element={<LineChartDefnPage />} />
            <Route path="/chartTypes/props/barChart" element={<BarChartDefnPage />} />
            <Route path="/chartTypes/props/multiLineChart" element={<MultiLineChartDefnPage />} />
            <Route path="/chartTypes/props/doughnutChart" element={<DoughnutChartDefnPage />} />
            <Route path="/chartTypes/props/pieChart" element={<PieChartDefnPage />} />
            <Route path="/chartTypes/props/polarAreaChart" element={<PolarAreaChartDefnPage />} />
            <Route path="/chartTypes/props/radarChart" element={<RadarChartDefnPage />} />
            <Route path="/chartTypes/props/groupedBarChart" element={<GroupedBarChartDefnPage />} />
            <Route path="/chartTypes/props/stackedBarChart" element={<StackedBarChartDefnPage />} />
            <Route path="/chartTypes/props/scatterChart" element={<ScatterChartDefnPage />} />
            <Route path="/chartTypes/props/bubbleChart" element={<BubbleChartDefnPage />} />

            <Route path="*" element={<h1>Under Construction</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
