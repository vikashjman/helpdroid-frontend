import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";
// This is just a sample data
const data = [
  { date: "2024-04-24", temp: 98, pulse: 100, spo2: 200 },
  { date: "2024-04-25", temp: 97, pulse: 200, spo2: 250 },
  { date: "2024-04-26", temp: 96, pulse: 250, spo2: 150 },
  { date: "2024-04-27", temp: 97, pulse: 240, spo2: 2500 },
  // ... your data here
];

const LineChartComponent = (email) => {
  const [graphdata, setGraphData] = useState([]);
  useEffect(() => {
    axios
      .post("https://my-flask-app-container-1-0.onrender.com/user-statistics", {
        email: email,
      })
      .then((res) => {
        console.log(res);
        setGraphData(res.data.health_details);
      })
      .catch((errr) => {});
  }, []);
  return (
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="temp"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="spo2" stroke="#82ca9d" />
      <Line type="monotone" dataKey="pulse" stroke="#FF8042" />
    </LineChart>
  );
};

export default LineChartComponent;
