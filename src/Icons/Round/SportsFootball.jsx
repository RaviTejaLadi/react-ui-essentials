import * as React from "react";

const SportsFootball = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M3.02 15.62c-.08 2.42.32 4.34.67 4.69s2.28.76 4.69.67l-5.36-5.36zM13.08 3.28c-2.33.42-4.79 1.34-6.62 3.18s-2.76 4.29-3.18 6.62l7.63 7.63c2.34-.41 4.79-1.34 6.62-3.18s2.76-4.29 3.18-6.62l-7.63-7.63zm1.72 7.32-4.2 4.2c-.39.39-1.01.39-1.4 0s-.39-1.01 0-1.4l4.2-4.2c.39-.39 1.01-.39 1.4 0s.39 1.01 0 1.4zm6.18-2.22c.08-2.42-.32-4.34-.67-4.69s-2.28-.76-4.69-.67l5.36 5.36z" />
    </svg>
  );
};

SportsFootball.displayName = "SportsFootball";

export default SportsFootball;
