import * as React from "react";

const BorderColor = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M20 24H4c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2zM13.06 5.19l3.75 3.75-8.77 8.77c-.18.19-.44.29-.7.29H5c-.55 0-1-.45-1-1v-2.34c0-.27.11-.52.29-.71l8.77-8.76zm4.82 2.68-3.75-3.75 1.83-1.83a.996.996 0 0 1 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83z" />
    </svg>
  );
};

BorderColor.displayName = "BorderColor";

export default BorderColor;
