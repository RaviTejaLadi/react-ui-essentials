import * as React from "react";

const ThumbDownOffAlt = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14.99 3H6c-.8 0-1.52.48-1.83 1.21L.91 11.82C.06 13.8 1.51 16 3.66 16h5.65l-.95 4.58c-.1.5.05 1.01.41 1.37.29.29.67.43 1.05.43s.77-.15 1.06-.44l5.53-5.54c.37-.37.58-.88.58-1.41V5c0-1.1-.9-2-2-2zm-4.33 16.33.61-2.92.5-2.41H3.66c-.47 0-.72-.28-.83-.45a.972.972 0 0 1-.08-.95L6 5h8.99v9.99l-4.33 4.34zM21 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
  );
};

ThumbDownOffAlt.displayName = "ThumbDownOffAlt";

export default ThumbDownOffAlt;
