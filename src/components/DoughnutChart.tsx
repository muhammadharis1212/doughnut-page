import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, ChartData } from "chart.js";

interface DoughnutProps {
  data: ChartData<"doughnut">;
}
const DoughnutChart = ({ data }: DoughnutProps) => {
  Chart.register(ArcElement, Tooltip);
  console.log("Doughnut Data : ", data);
  return (
    <div>
      <Doughnut
        data={data}
        width={250}
        height={250}
        options={{ maintainAspectRatio: false, responsive: false }}
      />
    </div>
  );
};

export default DoughnutChart;
