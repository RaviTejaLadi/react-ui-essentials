import * as React from "react";

const CurrencyRuble = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M8 21c.55 0 1-.45 1-1v-2h3c.55 0 1-.45 1-1s-.45-1-1-1H9v-2h4.5c3.22 0 5.79-2.76 5.47-6.04C18.7 5.1 16.14 3 13.26 3H8c-.55 0-1 .45-1 1v8H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1zm5.5-9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12z" />
    </svg>
  );
};

CurrencyRuble.displayName = "CurrencyRuble";

export default CurrencyRuble;
