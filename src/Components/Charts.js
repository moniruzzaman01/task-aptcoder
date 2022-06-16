import React from "react";
import Chart1 from "./Charts/Chart1";
import Chart2 from "./Charts/Chart2";

const Charts = () => {
  return (
    <div className=" p-5">
      <h1 className=" text-4xl my-5">Charts</h1>
      <div className=" w-full overflow-x-scroll mb-5">
        <Chart1 />
      </div>
      <div className=" w-full overflow-x-scroll mb-5">
        <Chart2 />
      </div>
    </div>
  );
};

export default Charts;
