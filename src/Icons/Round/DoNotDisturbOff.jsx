import * as React from "react";

const DoNotDisturbOff = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M17 11v2h-1.17l4.51 4.51A9.91 9.91 0 0 0 22 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66L13.83 11H17zM2.1 4.93l1.56 1.56c-1.37 2.07-2 4.68-1.48 7.45.75 3.95 3.92 7.13 7.88 7.88 2.77.52 5.38-.1 7.45-1.48l1.56 1.56a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42zM7 11h1.17l2 2H7v-2z" />
    </svg>
  );
};

DoNotDisturbOff.displayName = "DoNotDisturbOff";

export default DoNotDisturbOff;
