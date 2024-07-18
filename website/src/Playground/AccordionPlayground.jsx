import React, { useState } from "react";
import styles from "./AccordionPlayground.module.css";
import { Accordion } from "react-ui-essentials";

const AccordionPlayground = () => {
  const [content, setContent] = useState({
    header: "Sample Accordion",
    id: 1,
    text: "This is the accordion content.",
  });
  const [icon, setIcon] = useState("📁");
  const [variant, setVariant] = useState("primary");
  const [outlined, setOutlined] = useState(true);
  const [rounded, setRounded] = useState(true);
  const [elevation, setElevation] = useState(0);
  const [width, setWidth] = useState("300px");

  const variants = ["primary", "secondary", "success", "danger", "warning", "info", "help", "dark"];

  const generateCode = () => {
    return `<Accordion
  content={{
    header: "${content.header}",
    id: ${content.id},
    text: "${content.text}"
  }}
  icon="${icon}"
  variant="${variant}"
  outlined={${outlined}}
  rounded={${rounded}}
  elevation={${elevation}}
  width="${width}"
/>`;
  };

  return (
    <div className={styles.playground}>
      <h1 className={styles.title}>Accordion Playground</h1>

      <div className={styles.accordionWrapper}>
        <Accordion
          content={content}
          icon={icon}
          variant={variant}
          outlined={outlined}
          rounded={rounded}
          elevation={elevation}
          width={width}
        />
      </div>

      <div className={styles.controlsGrid}>
        <div className={styles.controlSection}>
          <h3>Content</h3>
          <div className={styles.formControl}>
            <label htmlFor="header">Header:</label>
            <input
              id="header"
              type="text"
              value={content.header}
              onChange={(e) => setContent({ ...content, header: e.target.value })}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="text">Text:</label>
            <textarea
              id="text"
              value={content.text}
              onChange={(e) => setContent({ ...content, text: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.controlSection}>
          <h3>Styling</h3>
          <div className={styles.formControl}>
            <label htmlFor="icon">Icon:</label>
            <input id="icon" type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="variant">Variant:</label>
            <select id="variant" value={variant} onChange={(e) => setVariant(e.target.value)}>
              {variants.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formControl}>
            <label>
              <input type="checkbox" checked={outlined} onChange={(e) => setOutlined(e.target.checked)} />
              Outlined
            </label>
          </div>
          <div className={styles.formControl}>
            <label>
              <input type="checkbox" checked={rounded} onChange={(e) => setRounded(e.target.checked)} />
              Rounded
            </label>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="elevation">Elevation:</label>
            <input
              id="elevation"
              type="number"
              value={elevation}
              onChange={(e) => setElevation(Number(e.target.value))}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="width">Width:</label>
            <input id="width" type="text" value={width} onChange={(e) => setWidth(e.target.value)} />
          </div>
        </div>
      </div>

      <h3>Generated Code:</h3>
      <pre className={styles.codeOutput}>
        <code>{generateCode()}</code>
      </pre>
    </div>
  );
};

export default AccordionPlayground;
