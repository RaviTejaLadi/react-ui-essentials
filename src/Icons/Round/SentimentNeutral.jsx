import * as React from "react";

const SentimentNeutral = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.0em" viewBox="0 0 24 24" {...props}>
      <path d="M9.75 15.5h4.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4.5c-.41 0-.75.34-.75.75s.34.75.75.75z" />
      <circle cx="15.5" cy="9.5" r="1.5" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    </svg>
  );
};

SentimentNeutral.displayName = "SentimentNeutral";

export default SentimentNeutral;
