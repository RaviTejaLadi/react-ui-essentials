import * as React from "react";

const FlipToBack = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8a2 2 0 0 0-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7a2 2 0 0 0 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM4 7c-.55 0-1 .45-1 1v11c0 1.1.9 2 2 2h11c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1V8c0-.55-.45-1-1-1zm11-2h2V3h-2v2zm0 12h2v-2h-2v2z" />
    </svg>
  );
};

FlipToBack.displayName = "FlipToBack";

export default FlipToBack;
