import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  BarElement,
  Tooltip,
  Legend
);
const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [ChartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
      datasets: [
        {
          label: "Sales $",
          data: [1232, 1934, 3567, 7905, 2467, 3546, 1234],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235,0.4)",
        },
      ],
    });
    setChartOptions({
      plugins: {
        title: {
          display: true,
          text: "Sales $",
        },
        legend: {
          positon: "top",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);
  return (
    <div className="w-full md:col-span-2 relative lg:h-[70] h-[70vh] m-auto p-4 border rounded-lg bg-white">
      <Bar data={chartData} options={ChartOptions} />
    </div>
  );
};

export default BarChart;
