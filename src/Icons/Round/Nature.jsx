import * as React from "react";

const Nature = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13 16.12c3.37-.4 6.01-3.19 6.16-6.64.17-3.87-3.02-7.25-6.89-7.31-3.92-.05-7.1 3.1-7.1 7A6.98 6.98 0 0 0 11 16.06V20H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-5v-3.88z" />
    </svg>
  );
};

Nature.displayName = "Nature";

export default Nature;
