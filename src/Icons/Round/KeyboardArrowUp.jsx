import * as React from "react";

const KeyboardArrowUp = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M8.12 14.71 12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z" />
    </svg>
  );
};

KeyboardArrowUp.displayName = "KeyboardArrowUp";

export default KeyboardArrowUp;
