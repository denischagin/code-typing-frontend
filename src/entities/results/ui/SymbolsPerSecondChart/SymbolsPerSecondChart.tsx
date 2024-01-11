import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip as TooltipChart, XAxis, YAxis} from "recharts";
import {SymbolsPerSecondChartProps} from "@entities/results";

export const SymbolsPerSecondChart = (props: SymbolsPerSecondChartProps) => {
    const {data} = props

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis/>
                <YAxis/>
                <TooltipChart contentStyle={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                <CartesianGrid stroke="rgba(238, 238, 238, 0.46)" strokeDasharray="7 7"/>
                <Line type="monotone" dataKey="spm" dot={false} stroke="#8884d8"/>
            </LineChart>
        </ResponsiveContainer>
    )
}
