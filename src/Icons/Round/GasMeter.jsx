import * as React from "react";

const GasMeter = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.0em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8C5.79 4 4 5.79 4 8v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 14c-1.38 0-2.5-1.1-2.5-2.46 0-1.02.38-1.35 2.12-3.35.2-.23.56-.23.75 0 1.73 1.99 2.12 2.34 2.12 3.35C14.5 16.9 13.38 18 12 18zm3-8H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z" />
    </svg>
  );
};

GasMeter.displayName = "GasMeter";

export default GasMeter;
