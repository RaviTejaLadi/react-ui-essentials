import * as React from "react";

const AppBlocking = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.0em" viewBox="0 0 24 24" {...props}>
      <path d="M18 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-2.5 4A2.5 2.5 0 0 1 18 9.5c.42 0 .8.11 1.15.29l-3.36 3.36c-.18-.35-.29-.73-.29-1.15zm2.5 2.5c-.42 0-.8-.11-1.15-.29l3.36-3.36c.18.35.29.73.29 1.15a2.5 2.5 0 0 1-2.5 2.5z" />
      <path d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1z" />
    </svg>
  );
};

AppBlocking.displayName = "AppBlocking";

export default AppBlocking;
