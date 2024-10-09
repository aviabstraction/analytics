// import EChart from "./components/common/EChart";

// const option = {
//   dataset: {
//     source: [
//       ["Commodity", "Owned", "Financed"],
//       ["Commodity 1", 4, 1],
//       ["Commodity 2", 2, 4],
//       ["Commodity 3", 3, 6],
//       ["Commodity 4", 5, 3],
//     ],
//   },
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "shadow",
//     },
//   },
//   legend: {
//     data: ["Owned", "Financed"],
//   },
//   grid: {
//     left: "10%",
//     right: "0%",
//     top: "20%",
//     bottom: "20%",
//   },
//   xAxis: {
//     type: "value",
//   },
//   yAxis: {
//     type: "category",
//   },
//   series: [
//     {
//       type: "bar",
//       stack: "total",
//       label: {
//         show: true,
//       },
//     },
//     {
//       type: "bar",
//       stack: "total",
//       label: {
//         show: true,
//       },
//     },
//   ],
// };

import LineChart from "./components/charts/LineChart";
import PieChart from "./components/charts/PieChart";
import AreaChart from "./components/charts/AreaChart";
import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="chart--wrapper">
      <h4>DCKAP Integrator Analytics</h4>
      {/* <div className="chart--container">
        <LineChart />
        <LineChart />
        <LineChart />
      </div> */}

      <div className="chart--container">
        <PieChart />
        <PieChart />
      </div>

      <div className="chart--container">
        <AreaChart />
      </div>

      <div className="chart--container">
        <LineChart name="API Hits" />
        <LineChart name="API Request/Response Size" />
        <LineChart name="API Time" />
      </div>
    </div>
  );
};

export default Analytics;
