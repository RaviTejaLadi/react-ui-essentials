import * as React from "react";

const NetworkWifi1Bar = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4zm3.32 10.84C14.34 14.3 13.2 14 12 14c-1.2 0-2.34.3-3.32.84L2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-5.76 5.77z" />
    </svg>
  );
};

NetworkWifi1Bar.displayName = "NetworkWifi1Bar";

export default NetworkWifi1Bar;
