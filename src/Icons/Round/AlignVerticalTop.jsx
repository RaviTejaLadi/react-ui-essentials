import * as React from "react";

const AlignVerticalTop = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M22 3c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1zM8.5 22c.83 0 1.5-.67 1.5-1.5v-13C10 6.67 9.33 6 8.5 6S7 6.67 7 7.5v13c0 .83.67 1.5 1.5 1.5zm7-6c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5S14 6.67 14 7.5v7c0 .83.67 1.5 1.5 1.5z" />
    </svg>
  );
};

AlignVerticalTop.displayName = "AlignVerticalTop";

export default AlignVerticalTop;
