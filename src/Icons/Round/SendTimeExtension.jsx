import * as React from "react";

const SendTimeExtension = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.0em" viewBox="0 0 24 24" {...props}>
      <path d="M20 6c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5V6z" />
      <path d="M13 12v4l4 1-4 1v4l10-5z" />
    </svg>
  );
};

SendTimeExtension.displayName = "SendTimeExtension";

export default SendTimeExtension;
