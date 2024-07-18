import React, { useState } from "react";
import styles from "./HeadingPlayground.module.css";
import { Heading } from "react-ui-essentials";

const HeadingPlayground = () => {
  const [content, setContent] = useState("Sample Heading");
  const [variant, setVariant] = useState("default");
  const [type, setType] = useState("h3");
  const [copy, setCopy] = useState(false);
  const [fontSize, setFontSize] = useState("");
  const [color, setColor] = useState("");
  const [underline, setUnderline] = useState(false);
  const [overline, setOverline] = useState(false);
  const [dashed, setDashed] = useState(false);
  const [italic, setItalic] = useState(false);
  const [strong, setStrong] = useState(false);
  const [strikethrough, setStrikethrough] = useState(false);
  const [marked, setMarked] = useState(false);
  const [smaller, setSmaller] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [inserted, setInserted] = useState(false);
  const [fontWeight, setFontWeight] = useState("");

  const variants = ["default", "primary", "secondary", "success", "info", "warning", "danger"];
  const types = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const generateCode = () => {
    return `<Heading
  variant="${variant}"
  type="${type}"
  copy={${copy}}
  fontSize="${fontSize}"
  color="${color}"
  underline={${underline}}
  overline={${overline}}
  dashed={${dashed}}
  italic={${italic}}
  strong={${strong}}
  strikethrough={${strikethrough}}
  marked={${marked}}
  smaller={${smaller}}
  deleted={${deleted}}
  inserted={${inserted}}
  fontWeight="${fontWeight}"
>
  ${content}
</Heading>`;
  };

  return (
    <div className={styles.playground}>
      <h1 className={styles.title}>Heading Playground</h1>

      <div className={styles.headingWrapper}>
        <Heading
          variant={variant}
          type={type}
          copy={copy}
          fontSize={fontSize}
          color={color}
          underline={underline}
          overline={overline}
          dashed={dashed}
          italic={italic}
          strong={strong}
          strikethrough={strikethrough}
          marked={marked}
          smaller={smaller}
          deleted={deleted}
          inserted={inserted}
          fontWeight={fontWeight}
        >
          {content}
        </Heading>
      </div>

      <div className={styles.controlsGrid}>
        <div className={styles.controlSection}>
          <h3>Content</h3>
          <div className={styles.formControl}>
            <label htmlFor="content">Text:</label>
            <input id="content" type="text" value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
        </div>

        <div className={styles.controlSection}>
          <h3>Main Properties</h3>
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
            <label htmlFor="type">Type:</label>
            <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.checkboxControl}>
            <input id="copy" type="checkbox" checked={copy} onChange={(e) => setCopy(e.target.checked)} />
            <label htmlFor="copy">Copy</label>
          </div>
        </div>

        <div className={styles.controlSection}>
          <h3>Styling</h3>
          <div className={styles.formControl}>
            <label htmlFor="fontSize">Font Size:</label>
            <input
              id="fontSize"
              type="text"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              placeholder="e.g., 24px"
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="color">Color:</label>
            <input
              id="color"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="e.g., #000000"
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="fontWeight">Font Weight:</label>
            <input
              id="fontWeight"
              type="text"
              value={fontWeight}
              onChange={(e) => setFontWeight(e.target.value)}
              placeholder="e.g., bold"
            />
          </div>
        </div>

        <div className={styles.controlSection}>
          <h3>Text Decoration</h3>
          {[
            { label: "Underline", state: underline, setState: setUnderline },
            { label: "Overline", state: overline, setState: setOverline },
            { label: "Dashed", state: dashed, setState: setDashed },
            { label: "Italic", state: italic, setState: setItalic },
            { label: "Strong", state: strong, setState: setStrong },
            { label: "Strikethrough", state: strikethrough, setState: setStrikethrough },
            { label: "Marked", state: marked, setState: setMarked },
            { label: "Smaller", state: smaller, setState: setSmaller },
            { label: "Deleted", state: deleted, setState: setDeleted },
            { label: "Inserted", state: inserted, setState: setInserted },
          ].map(({ label, state, setState }) => (
            <div key={label} className={styles.checkboxControl}>
              <input
                id={label.toLowerCase()}
                type="checkbox"
                checked={state}
                onChange={(e) => setState(e.target.checked)}
              />
              <label htmlFor={label.toLowerCase()}>{label}</label>
            </div>
          ))}
        </div>
      </div>

      <h3>Generated Code:</h3>
      <pre className={styles.codeOutput}>
        <code>{generateCode()}</code>
      </pre>
    </div>
  );
};

export default HeadingPlayground;
