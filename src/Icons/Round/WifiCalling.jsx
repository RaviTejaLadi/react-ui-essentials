import * as React from "react";

const WifiCalling = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.0em" viewBox="0 0 24 24" {...props}>
      <path d="M22 4.95C21.79 4.78 19.67 3 16.5 3c-3.18 0-5.29 1.78-5.5 1.95L16.5 12 22 4.95z" />
      <path d="m19.2 15.28-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.04.57-1.64L8.72 4.8a2.001 2.001 0 0 0-1.99-1.77H5c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.37 15.9 15.9 1.13.07 2.07-.87 2.07-2v-1.73c0-1.02-.76-1.87-1.77-1.99z" />
    </svg>
  );
};

WifiCalling.displayName = "WifiCalling";

export default WifiCalling;
