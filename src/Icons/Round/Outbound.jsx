import * as React from "react";

const Outbound = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.88 9.54-4.25 4.25a.996.996 0 1 1-1.41-1.41l4.25-4.25-1.27-1.27a.503.503 0 0 1 .35-.86h3.94c.28 0 .5.22.5.5v3.94c0 .45-.54.67-.85.35l-1.26-1.25z" />
    </svg>
  );
};

Outbound.displayName = "Outbound";

export default Outbound;
