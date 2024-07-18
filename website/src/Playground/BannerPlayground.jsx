import React, { useState } from "react";
import { Box, Heading, Banner } from "react-ui-essentials";
import styles from "./BannerPlayground.module.css";

const BannerPlayground = () => {
  const [title, setTitle] = useState("Banner Title");
  const [subTitle, setSubTitle] = useState("This is a subtitle for the banner");
  const [image, setImage] = useState("");
  const [variant, setVariant] = useState("primary");
  const [size, setSize] = useState("md");

  const generateCode = () => {
    let code = `<Banner\n`;
    code += `  title="${title}"\n`;
    if (subTitle) code += `  subTitle="${subTitle}"\n`;
    if (image) code += `  image="${image}"\n`;
    code += `  variant="${variant}"\n`;
    code += `  size="${size}"\n`;
    code += `/>`;
    return code;
  };

  return (
    <Box className={styles.playground} padding="20px" elevation={2} rounded>
      <Heading type="h1" className={styles.title}>
        Banner Playground
      </Heading>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label>Title:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.controlGroup}>
          <label>Subtitle:</label>
          <textarea value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />
        </div>
        <div className={styles.controlGroup}>
          <label>Image URL:</label>
          <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" />
        </div>
        <div className={styles.controlGroup}>
          <label>Variant:</label>
          <select value={variant} onChange={(e) => setVariant(e.target.value)}>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="success">Success</option>
            <option value="danger">Danger</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
            <option value="light">Light</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label>Size:</label>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </div>
      </div>

      <div className={styles.preview}>
        <Banner title={title} subTitle={subTitle} image={image} variant={variant} size={size} />
      </div>

      <div className={styles.codeDisplay}>
        <Heading type="h3">Generated Code:</Heading>
        <pre>{generateCode()}</pre>
      </div>
    </Box>
  );
};

export default BannerPlayground;
