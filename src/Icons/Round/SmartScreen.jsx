import * as React from "react";

const SmartScreen = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-3 2v10H6V7h12zm-4 5c0-.41-.34-.75-.75-.75s-.75.34-.75.75.34.75.75.75.75-.34.75-.75zm-5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75.34.75.75.75S9 12.41 9 12zm7.5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75.34.75.75.75.75-.34.75-.75zm-5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75.34.75.75.75.75-.34.75-.75z" />
    </svg>
  );
};

SmartScreen.displayName = "SmartScreen";

export default SmartScreen;
