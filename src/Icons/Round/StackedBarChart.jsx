import * as React from "react";

const StackedBarChart = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M6 20c1.1 0 2-.9 2-2V9H4v9c0 1.1.9 2 2 2zM4 8h4V6c0-1.1-.9-2-2-2s-2 .9-2 2v2zm6 3h4V9c0-1.1-.9-2-2-2s-2 .9-2 2v2zm6 1v2h4v-2c0-1.1-.9-2-2-2s-2 .9-2 2zm2 8c1.1 0 2-.9 2-2v-3h-4v3c0 1.1.9 2 2 2zm-6 0c1.1 0 2-.9 2-2v-6h-4v6c0 1.1.9 2 2 2z" />
    </svg>
  );
};

StackedBarChart.displayName = "StackedBarChart";

export default StackedBarChart;
