import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register all the items that are used in the chart.
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export interface ChartProps {}

const Chart: React.FC<ChartProps> = ({}) => {
	const data = {
		// Create array with numbers 1-15
		labels: Array.from({ length: 15 }, (v, k) => k + 1),
		datasets: [
			{
				label: 'Hours',
				data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81],
				fill: false,
				borderColor: '#0071F2',
				tension: 0.5,
			},
		],
	};

	return (
		<Line
			data={data}
			options={{
				scales: {
					x: {
						grid: {
							display: false,
						},
					},
					y: {
						grid: {
							display: false,
						},
					},
				},
			}}
		/>
	);
};

export default Chart;
