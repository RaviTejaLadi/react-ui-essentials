import React, { useState, useEffect, useRef, forwardRef, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./JsonViewer.module.css";
import Divider from "../Divider/Divider";
import Box from "../Box/Box";
import Button from "../Button/Button";
import ContentCopy from "../../Icons/Round/ContentCopy";
import CopyAll from "../../Icons/Round/CopyAll";

const JsonViewer = forwardRef(
  (
    {
      width = "auto",
      height = "auto",
      indetation = 4,
      replacer = null,
      title,
      margin = "10px",
      padding = "5px",
      data,
      copy = true,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [jsonData, setJsonData] = useState("");
    const [copyButtonText, setCopyButtonText] = useState(<ContentCopy width="15px" height="15px" />);
    const containerRef = useRef(null);

    useEffect(() => {
      const formattedJsonData = JSON?.stringify(data, replacer, indetation);
      const formattedData = formattedJsonData?.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?)|(\b(true|false|null|undefined)\b)|(\d+(\.\d+)?)|(\{|\}|\[|\])|(\/(\/|[^/])+\/)|(\[object (Object|Array|String|Number|Boolean|Symbol|Function)\])/g,
        (match) => {
          let classString = "";
          if (/^"/.test(match)) {
            classString = match.endsWith(":") ? `${styles.rue_json_preview_key}` : `${styles.rue_json_preview_string}`;
          } else if (/true|false|null|undefined/.test(match)) {
            classString = `${styles.rue_json_preview_boolean}`;
          } else if (/\d+(\.\d+)?/.test(match)) {
            classString = `${styles.rue_json_preview_number}`;
          } else if (/\{|\}/.test(match)) {
            classString = `${styles.rue_json_preview_brace}`;
          } else if (/\[|\]/.test(match)) {
            classString = `${styles.rue_json_preview_bracket}`;
          } else if (/\/(\/|[^/])+\//.test(match)) {
            classString = `${styles.rue_json_preview_regexp}`;
          } else if (/\[object (Object|Array)\]/.test(match)) {
            classString = `${styles.rue_json_preview_object}`;
          } else if (/\[object String\]/.test(match)) {
            classString = `${styles.rue_json_preview_string}`;
          } else if (/\[object Number\]/.test(match)) {
            classString = `${styles.rue_json_preview_number}`;
          } else if (/\[object Boolean\]/.test(match)) {
            classString = `${styles.rue_json_preview_boolean}`;
          } else if (/\[object Symbol\]/.test(match)) {
            classString = `${styles.rue_json_preview_symbol}`;
          } else if (/\[object Function\]/.test(match)) {
            classString = `${styles.rue_json_preview_function}`;
          }
          return `<span class="${classString}">${match}</span>`;
        }
      );
      setJsonData(formattedData);
    }, [data]);

    const handleCopyToClipboard = () => {
      const container = containerRef.current;
      const textContent = container.textContent;
      navigator.clipboard
        .writeText(textContent)
        .then(() => {
          setCopyButtonText(<CopyAll width="15px" height="15px" />);
          setTimeout(() => {
            setCopyButtonText(<ContentCopy width="15px" height="15px" />);
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy JSON data: ", err);
        });
    };

    return (
      <Box
        ref={ref}
        className={`${styles.rue_json_preview_container} ${className || ""}`}
        margin={margin}
        padding={padding}
        width={width}
        height={height}
        style={style}
        rounded
        outlined
        {...rest}
      >
        {(title || copy) && (
          <Fragment>
            <div className={styles.rue_json_preview_header}>
              <div className={styles.rue_json_preview_title}>{title && <span>{title}</span>}</div>
              <div className={styles.rue_json_preview_button}>
                {copy && (
                  <Button variant="light" onClick={handleCopyToClipboard}>
                    <Button.Icon>{copyButtonText}</Button.Icon>
                  </Button>
                )}
              </div>
            </div>
            <Divider />
          </Fragment>
        )}
        <pre className={styles.rue_json_preview} ref={containerRef} dangerouslySetInnerHTML={{ __html: jsonData }} />
      </Box>
    );
  }
);

JsonViewer.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  indetation: PropTypes.number,
  replacer: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  margin: PropTypes.string,
  padding: PropTypes.string,
  copy: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

JsonViewer.displayName = "JsonViewer";
export default JsonViewer;
