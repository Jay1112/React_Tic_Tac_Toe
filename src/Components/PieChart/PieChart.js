// src/components/PieChart.js
import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { useState } from "react";
import './PieChart.css';

function PieChart(props) {
    const [chartData, setChartData] = useState(
      {
        labels : props?.labels,
        datasets: [
              {
                data: props?.data,
                backgroundColor: [
                  "#93F03B",
                  "#378AFF",
                  "#FDCA40"
                ],
                borderColor: "transparent",
                borderWidth: 2,
              }
            ]
      }
    );

  return (
    <div className="chart-container">
      {
        chartData ? 
        <Pie
        data={chartData}
        options={
          {
            plugins : {
              legend : {
                labels : {
                  color : 'white'
                }
              }
            }
          }
        }
      /> : null
      }
      
    </div>
  );
}
export default PieChart;