import * as React from "react";

const UTurnRight = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M20.29 12.29a.996.996 0 0 0-1.41 0l-.88.88V9c0-3.31-2.69-6-6-6S6 5.69 6 9v11c0 .55.45 1 1 1s1-.45 1-1V9c0-2.21 1.79-4 4-4s4 1.79 4 4v4.17l-.88-.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.38-.38.38-1.02-.01-1.41z" />
    </svg>
  );
};

UTurnRight.displayName = "UTurnRight";

export default UTurnRight;
