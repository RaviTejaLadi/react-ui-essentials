import * as React from "react";

const Try = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M20 2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6.43 9.57-1.12 2.44a.5.5 0 0 1-.91 0l-1.12-2.44-2.44-1.12a.5.5 0 0 1 0-.91l2.44-1.12 1.12-2.44a.5.5 0 0 1 .91 0l1.12 2.44 2.44 1.12a.5.5 0 0 1 0 .91l-2.44 1.12z" />
    </svg>
  );
};

Try.displayName = "Try";

export default Try;
