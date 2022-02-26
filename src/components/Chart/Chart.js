import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
    const dataPointValue=props.dataPoints.map(dataPoint=>dataPoint.value);//returns just the array of num
    const totalmaximum=Math.max(...dataPointValue);
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalmaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};
export default Chart;
