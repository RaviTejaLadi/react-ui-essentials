import * as React from "react";

const DeveloperBoard = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M22 8c0-.55-.45-1-1-1h-1V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9h1c.55 0 1-.45 1-1zm-5 11H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zM6.5 13h4c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5zm6-6h3c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5zm-6 0h4c.28 0 .5.22.5.5v4c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5zm6 4h3c.28 0 .5.22.5.5v5c0 .28-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5z" />
    </svg>
  );
};

DeveloperBoard.displayName = "DeveloperBoard";

export default DeveloperBoard;
