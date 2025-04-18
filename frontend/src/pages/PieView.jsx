import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Twitter Followers", value: 1200 },
  { name: "Twitter Tweets", value: 540 },
  { name: "YouTube Subscribers", value: 850 },
  { name: "YouTube Views", value: 10000 },
  { name: "Instagram Followers", value: 1300 },
  { name: "Instagram Posts", value: 320 },
];

const COLORS = ["#1DA1F2", "#AAB8C2", "#FF0000", "#FFA07A", "#C13584", "#FFB6C1"];

function PieView() {
  return (
    <div className="chart-container">
      <h2>📈 Pie Chart View</h2>
      <PieChart width={600} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={140}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default PieView;
