import React from 'react';
import { Bar } from 'react-chartjs-2';

const PerformanceChart = ({ weeklyPerformance }) => {
  // Prepare the data for the chart
  const data = {
    labels: weeklyPerformance.map((weekData) => weekData.week),
    datasets: [
      {
        label: 'Completed Routes',
        data: weeklyPerformance.map((weekData) => weekData.completedRoutes),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      // You can add more datasets if needed to display additional data on the chart
    ],
  };

  // Options for the chart (you can customize this as needed)
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Render the chart using the provided data
  return (
    <div>
      <h2>Merchant's Weekly Performance</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PerformanceChart;
