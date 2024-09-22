import PropTypes from "prop-types";
import React, { useState, forwardRef } from "react";
import styles from "./ColorPaletteGenerator.module.css";
import { hexToRgb } from "../../utils/hexToRgb";
import { rgbToHsl } from "../../utils/rgbToHsl";
import { rgbToHex } from "../../utils/rgbToHex";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";

const ColorPaletteGenerator = forwardRef(
  ({ baseColor, title, width, height, className, style, padding = "10px", ...rest }, ref) => {
    const [copied, setCopied] = useState(null);

    const handleCopy = (format, hexColor, rgbaColor, hslColor) => {
      let textToCopy = "";

      switch (format) {
        case "hex":
          textToCopy = hexColor;
          break;
        case "rgb":
          const { r, g, b } = hexToRgb(hexColor);
          textToCopy = `rgb(${r}, ${g}, ${b})`;
          break;
        case "rgba":
          textToCopy = rgbaColor;
          break;
        case "hsl":
          textToCopy = hslColor;
          break;
        default:
          break;
      }

      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(`${format.toUpperCase()}: ${textToCopy}`);
        setTimeout(() => {
          setCopied(null);
        }, 2000);
      });
    };

    const generateVariants = () => {
      const variants = [];
      const { r, g, b } = hexToRgb(baseColor);

      for (let i = 10; i <= 100; i += 10) {
        const opacity = i / 100;

        const blendedR = Math.round(r * opacity + 255 * (1 - opacity));
        const blendedG = Math.round(g * opacity + 255 * (1 - opacity));
        const blendedB = Math.round(b * opacity + 255 * (1 - opacity));

        const hexColor = rgbToHex(blendedR, blendedG, blendedB);
        const rgbaColor = `rgba(${blendedR}, ${blendedG}, ${blendedB}, ${opacity})`;
        const hslColor = rgbToHsl(blendedR, blendedG, blendedB);
        const hslString = `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`;

        variants.push(
          <div
            key={i}
            className={styles.rue_generated_variants}
            style={{
              backgroundColor: hexColor,
              padding: "10px",
              color: "#000000",
              cursor: "pointer",
            }}
          >
            <span>{`Opacity: ${i}% `}</span>
            <span>{hexColor}</span>
            <div className={styles.rue_buttonContainer}>
              <Button
                title="copy hex"
                style={{ fontSize: "10px", fontWeight: "600" }}
                variant="light"
                onClick={() => handleCopy("hex", hexColor, rgbaColor, hslString)}
                raised
              >
                HEX
              </Button>
              <Button
                title="copy rgb"
                style={{ fontSize: "10px", fontWeight: "600" }}
                variant="light"
                onClick={() => handleCopy("rgb", hexColor, rgbaColor, hslString)}
                raised
              >
                RGB
              </Button>
              <Button
                title="copy rgba"
                style={{ fontSize: "10px", fontWeight: "600" }}
                variant="light"
                onClick={() => handleCopy("rgba", hexColor, rgbaColor, hslString)}
                raised
              >
                RGBA
              </Button>
              <Button
                title="copy hsl"
                style={{ fontSize: "10px", fontWeight: "600" }}
                variant="light"
                onClick={() => handleCopy("hsl", hexColor, rgbaColor, hslString)}
                raised
              >
                HSL
              </Button>
            </div>
          </div>
        );
      }
      return variants;
    };

    return (
      <Box
        ref={ref}
        className={`${styles.rue_colorPaletteContainer} ${className || ""}`}
        width={width}
        height={height}
        padding={padding}
        style={style}
        {...rest}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>{title}</span>
          {copied && <div style={{ color: baseColor }}>Copied: {copied}</div>}
        </div>
        <Divider />
        <div className={styles.rue_generated_variants_container}>{generateVariants()}</div>
      </Box>
    );
  }
);

ColorPaletteGenerator.propTypes = {
  baseColor: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  width: PropTypes.string,
  padding: PropTypes.string,
};

ColorPaletteGenerator.displayName = "ColorPaletteGenerator";
export default ColorPaletteGenerator;
