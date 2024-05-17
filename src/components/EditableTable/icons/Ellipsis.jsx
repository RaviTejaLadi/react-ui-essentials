import * as React from "react";

const Ellipsis = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M13 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Ellipsis;
