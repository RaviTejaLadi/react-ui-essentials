import * as React from "react";

const ElectricRickshaw = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M21 11.18V9.72c0-.47-.16-.92-.46-1.28L16.6 3.72c-.38-.46-.94-.72-1.54-.72H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h.18C3.6 16.16 4.7 17 6 17s2.4-.84 2.82-2h8.37a2.996 2.996 0 0 0 5.82-1c-.01-1.3-.85-2.4-2.01-2.82zM18.4 9H16V6.12L18.4 9zM4 5h3v4H3V6c0-.55.45-1 1-1zm2 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3-2v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H9V5h4c.55 0 1 .45 1 1v7H9zm11 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7 20h4v-2l6 3h-4v2z" />
    </svg>
  );
};

ElectricRickshaw.displayName = "ElectricRickshaw";

export default ElectricRickshaw;
