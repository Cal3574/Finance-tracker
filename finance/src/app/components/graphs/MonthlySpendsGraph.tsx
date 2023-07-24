"use client";

import { FC, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { returnAllCategories } from "@/app/serverActions/returnAllCategories";
import { CategoryProps } from "../inputs/Input";
import { useSpendCategories } from "@/app/hooks/useSpendCategories";
import { useReturnUserSpends } from "@/app/hooks/useReturnUserSpends";
import { useHandleMonth } from "@/app/hooks/useManageSpends";
import { monitorEventLoopDelay } from "perf_hooks";
import { monthNames } from "@/app/constants/dates";
ChartJS.register(ArcElement, Tooltip, Legend);

interface MonthlySpendsGraphProps {
  userSpends: any;
  session: any;
  categories: any;
}

const MonthlySpendsGraph: FC<MonthlySpendsGraphProps> = ({
  userSpends,
  session,
  categories,
}) => {
  const {
    setSelectedMonth,
    selectedMonth,
    monthName,
    handleMonthChange,
    getMonthName,
    spends,
    totalSpends,
    setSpends,
  } = useHandleMonth({ userSpends });

  console.log(totalSpends);

  const [graphData, setGraphData] = useState<any>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [""],
        borderColor: [""],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    console.log("spends");
  }, [selectedMonth]);

  const plugins = [
    {
      id: "here comes your id for the specific plugin",
      beforeDraw: function (chart: any) {
        // ... Rest of the code ...
      },
      afterDraw: function (chart: any) {
        // Update the text with the latest totalSpends value
        const ctx = chart.ctx;
        const width = chart.width;
        const height = chart.height;
        const fontSize = (height / 200).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "white ";
        ctx.textBaseline = "";
        const text = monthName;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
      },
    },
  ];

  useEffect(() => {
    if (categories && spends) {
      const categoryNames = categories.map((category: CategoryProps) => {
        return category.name;
      });

      const categoryTotals = categories.map((category: CategoryProps) => {
        let total = 0;
        spends.filter((spend: any) => {
          if (spend.categoryId === category.id) {
            total += spend.amount;
          }
        });
        return total;
      });

      if (categories) {
        setGraphData({
          labels: categoryNames,
          datasets: [
            {
              label: "Money Spent (£)",
              data: categoryTotals,
              backgroundColor: ["#416788", "#7389AE", "#B5BAD0", "#81D2C7"],
              borderColor: ["#ffffff"],
              borderWidth: 1,
            },
          ],
        });
      }
    }
  }, [spends, totalSpends]);

  return (
    <div className="bg-[#2D325A] rounded-xl h-auto md:w-[24rem] w-full m-4">
      <div className="flex items-center w-full">
        <div className="w-full">
          <h1 className="text-2xl text-start m-2 p-4">Monthly Overview</h1>
          <p className="m-2 p-4">{`£${totalSpends}`} spent this month</p>
        </div>
      </div>
      <div className="p-4 flex justify-center">
        <Doughnut
          data={graphData}
          plugins={plugins}
          options={{}}
          key={totalSpends}
        />
      </div>
    </div>
  );
};

export default MonthlySpendsGraph;
