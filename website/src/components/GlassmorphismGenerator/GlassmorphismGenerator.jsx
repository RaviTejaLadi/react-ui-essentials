import React, { useEffect, useState } from "react";
import { Range, PreviewCode, Box, ColorPicker } from "react-ui-essentials";
import {
  clownFace,
  droolingFace,
  grinningFace,
  huggingFace,
  moneyFace,
  sleepingFace,
  smilingFace,
  starFace,
} from "./utils/images";

const hexToRgb = (hex) => {
  let r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

const GlassmorphismGenerator = () => {
  const [blur, setBlur] = useState(4.0);
  const [opacity, setOpacity] = useState(0.25);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [saturation, setSaturation] = useState(180);
  const [code, setCode] = useState("");

  useEffect(() => {
    const css = ` 
    background: rgba(${hexToRgb(backgroundColor)}, ${opacity}); 
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); 
    backdrop-filter: blur(${blur}px) saturate(${saturation}%);
    -webkit-backdrop-filter: blur(${blur}px) saturate(${saturation}%);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125); `;

    setCode(css);
  }, [blur, opacity, backgroundColor, saturation]);

  const style = {
    color: "#ffff",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `rgba(${hexToRgb(backgroundColor)}, ${opacity})`,
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
    border: "1px solid rgba(255, 255, 255, 0.125)",
  };

  const container = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    alignContent: "baseline",
    flexWrap: "wrap",
    Gap: "5px",
    padding: "10px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    backgroundColor: "#111927",
    backgroundImage:
      "radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%",
  };

  const containerData = [
    { width: "200px", height: "200px", src: clownFace, alt: "clownFace" },
    { width: "180px", height: "180px", src: droolingFace, alt: "droolingFace" },
    { width: "160px", height: "160px", src: grinningFace, alt: "grinningFace" },
    { width: "140px", height: "140px", src: huggingFace, alt: "huggingFace" },
    { width: "120px", height: "120px", src: moneyFace, alt: "moneyFace" },
    { width: "100px", height: "100px", src: sleepingFace, alt: "sleepingFace" },
    { width: "80px", height: "80px", src: smilingFace, alt: "smilingFace" },
    { width: "60px", height: "60px", src: starFace, alt: "starFace" },
  ];
  const sliderData = [
    { title: "Blur", value: blur, min: 0, max: 20, step: 0.1, handleChange: (e) => setBlur(e.target.value) },
    { title: "Opacity", value: opacity, min: 0, max: 1.0, step: 0.1, handleChange: (e) => setOpacity(e.target.value) },
    {
      title: "Saturation",
      value: saturation,
      min: 0,
      max: 200,
      step: 0.1,
      handleChange: (e) => setSaturation(e.target.value),
    },
  ];
  return (
    <Box elevation={1} rounded style={{ padding: "10px", display: "flex", justifyContent: "space-between" }}>
      {/* Glassmorphism effect */}
      <Box width="70%" rounded style={container}>
        {containerData.map((item, index) => (
          <Box key={index} elevation={1} width={item.width} height={item.height} rounded style={style}>
            <img src={item.src} width="70%" height="70%" alt={item.alt} />
          </Box>
        ))}
      </Box>
      <Box width="28%" style={{ padding: "10px" }} outlined>
        {sliderData.map((item, index) => (
          <Range
            key={index}
            value={item.value}
            width="100%"
            height="5px"
            title={item.title}
            min={item.min}
            max={item.max}
            step={item.step}
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
export default GlassmorphismGenerator;
