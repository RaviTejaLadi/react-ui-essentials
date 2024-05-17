import * as React from "react";

const UpArrow = (props) => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M11 17V5.414l3.293 3.293a.999.999 0 1 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a.997.997 0 0 0 0 1.414 1 1 0 0 0 1.414 0L9 5.414V17a1 1 0 1 0 2 0"
      fill="#5C5F62"
    />
  </svg>
);
export default UpArrow;
