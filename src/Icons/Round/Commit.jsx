import * as React from "react";

const Commit = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M21 13c.55 0 1-.45 1-1s-.45-1-1-1h-4.1a5 5 0 0 0-9.8 0H3c-.55 0-1 .45-1 1s.45 1 1 1h4.1a5 5 0 0 0 9.8 0H21zm-9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </svg>
  );
};

Commit.displayName = "Commit";

export default Commit;
