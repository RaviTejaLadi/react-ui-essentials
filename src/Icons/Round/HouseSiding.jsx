import * as React from "react";

const HouseSiding = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 12h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1s1-.45 1-1v-1h10v1c0 .55.45 1 1 1s1-.45 1-1v-7zM7.21 10h9.58l.21.19V12H7v-1.81l.21-.19zm7.36-2H9.43L12 5.69 14.57 8zM7 16v-2h10v2H7z" />
    </svg>
  );
};

HouseSiding.displayName = "HouseSiding";

export default HouseSiding;
