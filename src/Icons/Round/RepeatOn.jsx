import * as React from "react";

const RepeatOn = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-2 17c0 .55-.45 1-1 1H7v1.79a.5.5 0 0 1-.85.36l-2.79-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79c.31-.32.85-.1.85.35V17h10v-3c0-.55.45-1 1-1s1 .45 1 1v4zm1.64-11.65-2.79 2.79c-.31.32-.85.1-.85-.35V7H7v3c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1h11V3.21a.5.5 0 0 1 .85-.36l2.79 2.79c.2.2.2.51 0 .71z" />
    </svg>
  );
};

RepeatOn.displayName = "RepeatOn";

export default RepeatOn;
