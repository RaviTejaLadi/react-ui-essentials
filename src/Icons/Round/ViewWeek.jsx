import * as React from "react";

const ViewWeek = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M5.33 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1.33c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2zM22 18V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2H20a2 2 0 0 0 2-2zm-7.33 0V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h1.33c1.1 0 2-.9 2-2z" />
    </svg>
  );
};

ViewWeek.displayName = "ViewWeek";

export default ViewWeek;
