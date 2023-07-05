"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";

const MonthlySpendingPieChart = () => {
  const series = [44, 55, 41, 101, 15];
  const options = {
    chart: {
      width: 200,
      type: "donut",
      dropShadow: {
        enabled: true,
        top: -1,
        left: 3,
        blur: 3,
      },
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "20x",
            fontFamily: "Arial, sans-serif",
            fontWeight: 600,
            color: "#FFFFFF", // Set the default label color here
          },
          value: {
            show: true,
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            fontWeight: 600,
            color: "#FFFFFF", // Set the desired label color here
          },
          total: {
            show: true, // Hide the total label
            showAlways: true, // Always show the total label
            label: "Total", // Set the label for the total value
          },
        },
      },
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
      color: "#FFFFFF",
    },
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        enabled: true,
        style: [],
      },
    },
    states: {
      hover: {
        filter: "none",
      },
    },
    theme: {
      palette: "",
    },
    title: {
      text: "",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 10,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="bg-[#2D325A] rounded-xl h-80 w-[32rem] m-4 flex flex-col mb-44">
      <div>
        <h1 className="text-2xl text-start m-2 p-4">Current Month Spending</h1>
      </div>
      <div id="chart" className="w-[10rem]">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={350}
        />
      </div>
    </div>
  );
};

export default MonthlySpendingPieChart;
