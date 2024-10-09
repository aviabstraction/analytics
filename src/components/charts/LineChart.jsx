import EChart from "../common/EChart";

const option = {
  title: {
    text: "Trigger",
    subtext: "Fake Data",
    left: "center",
  },
  xAxis: {
    type: "category",
    data: ["A", "B", "C"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150],
      type: "line",
    },
  ],
};

const LineChart = ({ name }) => {
  return <EChart option={option} width={"25%"} height={"300px"} />;
};

export default LineChart;
