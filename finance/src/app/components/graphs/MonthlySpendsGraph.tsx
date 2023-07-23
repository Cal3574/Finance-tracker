"use client";

import { FC, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { returnAllCategories } from "@/app/serverActions/returnAllCategories";
import { CategoryProps } from "../inputs/Input";
import { useSpendCategories } from "@/app/hooks/useSpendCategories";
import { useReturnUserSpends } from "@/app/hooks/useReturnUserSpends";
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

  const plugins = [
    {
      id: "here comes your id for the specific plugin",
      beforeDraw: function (chart: any) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 180).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "white";
        ctx.textBaseline = "top";
        var text = "January",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  useEffect(() => {
    if (categories && userSpends) {
      const categoryNames = categories.map((category: CategoryProps) => {
        return category.name;
      });

      const categoryTotals = categories.map((category: CategoryProps) => {
        let total = 0;
        userSpends.filter((spend: any) => {
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
              backgroundColor: ["#FFFFFF", "#6D696A", "#A2A7A5", "#DAE2DF"],
              borderColor: ["#24445c"],
              borderWidth: 1,
            },
          ],
        });
      }
    }
  }, []);

  return (
    <div className="bg-[#2D325A] rounded-xl h-80 md:w-auto w-full m-4 ">
      <Doughnut data={graphData} plugins={plugins} />
    </div>
  );
};

export default MonthlySpendsGraph;
