import * as React from "react";

const RestaurantMenu = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="m8.1 13.34 2.83-2.83-6.19-6.18c-.48-.48-1.31-.35-1.61.27-.71 1.49-.45 3.32.78 4.56l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L4.4 19.17a.996.996 0 1 0 1.41 1.41L12 14.41l6.18 6.18a.996.996 0 1 0 1.41-1.41L13.41 13l1.47-1.47z" />
    </svg>
  );
};

RestaurantMenu.displayName = "RestaurantMenu";

export default RestaurantMenu;
