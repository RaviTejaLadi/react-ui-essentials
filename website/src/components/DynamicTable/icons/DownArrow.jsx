import * as React from "react";

const DownArrow = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M7.332 16.315a1 1 0 1 0-1.414 1.415l4.665 4.665a2 2 0 0 0 2.829 0l4.668-4.668a1 1 0 0 0-1.414-1.415L13 19.98V2a1 1 0 1 0-2 0v17.983z"
      fill="#0F0F0F"
    />
  </svg>
);
export default DownArrow;
