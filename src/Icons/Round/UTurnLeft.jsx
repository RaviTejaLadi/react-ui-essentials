import * as React from "react";

const UTurnLeft = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M3.71 12.29a.996.996 0 0 1 1.41 0l.88.88V9c0-3.31 2.69-6 6-6s6 2.69 6 6v11c0 .55-.45 1-1 1s-1-.45-1-1V9c0-2.21-1.79-4-4-4S8 6.79 8 9v4.17l.88-.88a.996.996 0 1 1 1.41 1.41L7.7 16.29a.996.996 0 0 1-1.41 0L3.7 13.7c-.38-.38-.38-1.02.01-1.41z" />
    </svg>
  );
};

UTurnLeft.displayName = "UTurnLeft";

export default UTurnLeft;
