import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import TabX from "../tab/TabX";

interface IGridInput {
    data: any,
    header: string,
    import: any
}

const Grid = (props: IGridInput) => {

    return (
        <div>
            <div className="h1-container"><span className="h1">{props.header}</span></div>
            <div className="defn-import">
                <TabX labels={['Import']} Children={[props.import]} />
            </div>
            <Table className="">
                <TableHead>
                    <TableRow>
                        <TableCell className="defn-table-head">Property</TableCell>
                        <TableCell className="defn-table-head">Type</TableCell>
                        <TableCell className="defn-table-head">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((d, index) => (
                        <TableRow className="defn-table-column" key={index}>
                            <TableCell>{d.property}</TableCell>
                            <TableCell>{d.type}</TableCell>
                            <TableCell>{d.description}</TableCell>
                        </TableRow>))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default Grid;