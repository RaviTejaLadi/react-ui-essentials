import * as React from "react";

const MonitorWeight = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      <circle cx="10.5" cy={9} r=".5" />
      <circle cx="13.5" cy={9} r=".5" />
      <circle cx={12} cy={9} r=".5" />
    </svg>
  );
};

MonitorWeight.displayName = "MonitorWeight";

export default MonitorWeight;
