import * as React from "react";

const CoffeeMaker = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18 6V4h1c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1h-3.03A4.966 4.966 0 0 0 18 16v-3c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v3c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1z" />
      <circle cx={13} cy={9} r={1} />
    </svg>
  );
};

CoffeeMaker.displayName = "CoffeeMaker";

export default CoffeeMaker;
