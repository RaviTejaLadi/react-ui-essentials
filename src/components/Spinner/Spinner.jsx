import React from "react";
const Spinner = ({ width = 100, height = 100, color = "#ccc" }) => {
  return (
    <div>
      {" "}
      <svg width={width} height={height} viewBox="-1 -1 42 42" xmlns="http://www.w3.org/2000/svg">
        {" "}
        <defs>
          {" "}
          <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            {" "}
            <stop stopColor={color} className="circle" stopOpacity="0" offset="0%" />{" "}
            <stop stopColor={color} className="circle" stopOpacity=".631" offset="63.146%" />{" "}
            <stop stopColor={color} className="circle" offset="100%" />{" "}
          </linearGradient>{" "}
        </defs>{" "}
        <g fill="none" fillRule="evenodd">
          {" "}
          <g transform="translate(1 1)">
            {" "}
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="4">
              {" "}
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />{" "}
            </path>{" "}
            <circle fill={color} cx="36" cy="18" r="1" className="circle">
              {" "}
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />{" "}
            </circle>{" "}
          </g>{" "}
        </g>{" "}
      </svg>{" "}
    </div>
  );
};
export default Spinner;
