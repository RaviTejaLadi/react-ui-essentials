import * as React from "react";

const ScreenRotationAlt = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.53 9.29c.63.63.18 1.71-.71 1.71-.27 0-.52-.11-.71-.29L10.4 4 5.41 9H7c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v1.59l5-5c.78-.78 2.05-.78 2.83 0l6.7 6.7zM5.47 14.71c-.63-.63-.18-1.71.71-1.71.27 0 .52.11.71.29L13.6 20l4.99-5H17c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-5 5c-.78.78-2.05.78-2.83 0l-6.7-6.7z" />
    </svg>
  );
};

ScreenRotationAlt.displayName = "ScreenRotationAlt";

export default ScreenRotationAlt;
