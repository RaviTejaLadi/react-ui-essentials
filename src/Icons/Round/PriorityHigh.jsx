import * as React from "react";

const PriorityHigh = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <circle cx={12} cy={19} r={2} />
      <path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
  );
};

PriorityHigh.displayName = "PriorityHigh";

export default PriorityHigh;
