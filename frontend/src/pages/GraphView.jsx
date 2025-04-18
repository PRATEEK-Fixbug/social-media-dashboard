import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Twitter Followers", value: 1200 },
  { name: "Twitter Tweets", value: 540 },
  { name: "YouTube Subscribers", value: 850 },
  { name: "YouTube Views", value: 10000 },
  { name: "Instagram Followers", value: 1300 },
  { name: "Instagram Posts", value: 320 },
];

function GraphView() {
  return (
    <div className="chart-container">
      <h2>📊 Graph View</h2>
      <BarChart
        layout="vertical"
        width={700}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default GraphView;
