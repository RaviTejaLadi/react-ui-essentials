import * as React from "react";

const AddToDrive = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 11c.17 0 .33.01.49.02L15 3H9l5.68 9.84A5.986 5.986 0 0 1 19 11zM8.15 4.52 2 15.5 5 21l6.33-10.97zM13.2 15.5H9.9L6.73 21h7.81A5.93 5.93 0 0 1 13 17c0-.52.07-1.02.2-1.5zm6.8.5v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </svg>
  );
};

AddToDrive.displayName = "AddToDrive";

export default AddToDrive;
