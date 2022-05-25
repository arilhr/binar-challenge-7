import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./PopularCar.scss";
import OrderCarData from "../../assets/data/OrderCarData.json";

export const PopularCar = () => {
  const data = {
    labels: OrderCarData.map((item) => item.name),
    datasets: [
      {
        data: OrderCarData.map((item) => item.order),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div id="popular-car">
      <div className="container row flex-column gap-5 justify-content-center align-items-center m-auto flex-lg-row">
        <h3 className="text-center text-uppercase text-500">Popular Car</h3>
        <div className="w-50">
          <Pie data={data} height={150} />
        </div>
      </div>
    </div>
  );
};
