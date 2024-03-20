import React, { memo, useEffect, useState } from "react";
import { Box, PreviewCode, Range, ColorPicker } from "react-ui-essentials";

const BorderRadiusGenerator = () => {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#c3dffb");
  const [code, setCode] = useState("");

  useEffect(() => {
    const css = ` 
    backgroundColor: ${backgroundColor},
    borderRadius:  ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

    setCode(css);
  }, [topLeft, topRight, bottomRight, bottomLeft, backgroundColor]);

  const borderRadiusStyle = {
    backgroundColor: `${backgroundColor}`,
    borderRadius: ` ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
  };

  const sliderData = [
    { title: "Top Left", value: topLeft, min: 0, max: 100, handleChange: (e) => setTopLeft(e.target.value) },
    { title: "Top Right", value: topRight, min: 0, max: 100, handleChange: (e) => setTopRight(e.target.value) },
    {
      title: "Bottom Right",
      value: bottomRight,
      min: 0,
      max: 100,
      handleChange: (e) => setBottomRight(e.target.value),
    },
    {
      title: "Bottom Left",
      value: bottomLeft,
      min: 0,
      max: 100,
      handleChange: (e) => setBottomLeft(e.target.value),
    },
  ];

  const containerData = [
    { width: "200px", height: "200px" },
    { width: "180px", height: "180px" },
    { width: "160px", height: "160px" },
    { width: "140px", height: "140px" },
    { width: "120px", height: "120px" },
    { width: "100px", height: "100px" },
    { width: "80px", height: "80px" },
    { width: "60px", height: "60px" },
  ];

  return (
    <Box elevation={1} rounded width="100%" height="100%" style={{ display: "flex" }}>
      <Box
        elevation={0}
        outlined
        width="70%"
        height="100%"
        margin="8px"
        style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", padding: "10px" }}
      >
        {containerData.map((item, index) => (
          <Box
            key={index}
            elevation={1}
            margin="10px"
            style={borderRadiusStyle}
            width={item.width}
            height={item.height}
          >
            {item.width}*{item.height}
          </Box>
        ))}
      </Box>
      <Box elevation={0} outlined width="28%" height="100%" margin="8px" style={{ padding: "10px" }}>
        {sliderData.map((item, index) => (
          <Range
            key={index}
            value={item.value}
            width="100%"
            height="5px"
            title={item.title}
            min={item.min}
            max={item.max}
            handleChange={item.handleChange}
          />
        ))}
        <ColorPicker
          title="Card Color"
          width="100%"
          handleChange={(e) => setBackgroundColor(e.target.value)}
          value={backgroundColor}
        />
        <PreviewCode width="100%">{code}</PreviewCode>
      </Box>
    </Box>
  );
};

export default memo(BorderRadiusGenerator);
