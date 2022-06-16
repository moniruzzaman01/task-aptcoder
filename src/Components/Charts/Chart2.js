import React from "react";
import { FunnelChart, Tooltip, Funnel, LabelList } from "recharts";

const Chart2 = () => {
  const data = [
    {
      value: 100,
      name: "A",
      fill: "#8884d8",
    },
    {
      value: 80,
      name: "F",
      fill: "#83a6ed",
    },
    {
      value: 50,
      name: "H",
      fill: "#8dd1e1",
    },
    {
      value: 40,
      name: "D",
      fill: "#82ca9d",
    },
    {
      value: 26,
      name: "R",
      fill: "#a4de6c",
    },
  ];
  return (
    <FunnelChart width={730} height={250}>
      <Tooltip />
      <Funnel dataKey="value" data={data} isAnimationActive>
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </Funnel>
    </FunnelChart>
  );
};

export default Chart2;
