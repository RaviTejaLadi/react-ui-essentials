import * as React from "react";

const CircleNotifications = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5zm4-2.5H8c-.55 0-1-.45-1-1s.45-1 1-1v-3c0-1.86 1.28-3.41 3-3.86V6.5c0-.55.45-1 1-1s1 .45 1 1v.64c1.72.45 3 2 3 3.86v3c.55 0 1 .45 1 1s-.45 1-1 1z" />
    </svg>
  );
};

CircleNotifications.displayName = "CircleNotifications";

export default CircleNotifications;
