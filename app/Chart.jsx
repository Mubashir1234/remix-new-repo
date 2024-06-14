import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';

const MyChart = ({ chartData }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Clean up previous chart instance
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar', // You can choose other chart types (line, pie, etc.)
      data: {
        labels: chartData.map((dataPoint) => dataPoint.label),
        datasets: [
          {
            label: 'Incidentes en Dispositivos',
            data: chartData.map((dataPoint) => dataPoint.data['Incidentes en Dispositivos']),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Intrusiones por Correo Electrónico',
            data: chartData.map((dataPoint) => dataPoint.data['Intrusiones por Correo Electrónico']),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Violaciones en la Red Interna',
            data: chartData.map((dataPoint) => dataPoint.data['Violaciones en la Red Interna']),
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy chart instance
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [chartData]);

  return <canvas ref={chartRef} width={600} height={400} />;
};

export default MyChart;
