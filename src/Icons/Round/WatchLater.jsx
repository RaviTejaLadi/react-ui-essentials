import * as React from "react";

const WatchLater = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.55 13.8-4.08-2.51c-.3-.18-.48-.5-.48-.85V7.75c.01-.41.35-.75.76-.75s.75.34.75.75v4.45l3.84 2.31c.36.22.48.69.26 1.05-.22.35-.69.46-1.05.24z" />
    </svg>
  );
};

WatchLater.displayName = "WatchLater";

export default WatchLater;
