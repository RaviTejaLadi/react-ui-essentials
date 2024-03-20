import PropTypes from "prop-types";
import React, { memo } from "react";
import styles from "./View.module.css";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";

const View = ({ width, height, code, elements }) => {
  const containerStyles = {
    width: width,
    height: height,
  };

  return (
    <div style={containerStyles} className={styles.rue_view_cont}>
      <div className={styles.rue_view_header}>
        <div className={styles.rue_view_title}>Result</div>
      </div>
      <div className={styles.rue_view_output}>{elements}</div>
      <div className={styles.rue_view_code_header}>
        <div className={styles.rue_view_code_header_title}>Code</div>
        <div className={styles.rue_view_code_header_controllers}>
          <Button size="sm" variant="light">
            <svg
              width="13"
              height="18"
              viewBox="0 0 32 32"
              fill="currentColor"
              style={{ display: "block" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#FFCA28" d="M2 2h28v28H2z" />
              <path
                d="m19 25.288 2.061-1.364c.162.507 1.185 1.713 2.477 1.713 1.293 0 1.893-.706 1.893-1.174 0-1.275-1.32-1.725-1.954-1.94a3.689 3.689 0 0 1-.246-.09 3.68 3.68 0 0 0-.133-.053c-.705-.269-3.306-1.262-3.306-4.143 0-3.172 3.062-3.537 3.754-3.537.453 0 2.63.056 3.716 2.094l-2 1.396c-.439-.889-1.167-1.182-1.616-1.182-1.108 0-1.338.812-1.338 1.182 0 1.037 1.203 1.502 2.22 1.894.265.103.518.2.734.303 1.107.523 2.738 1.38 2.738 4.076C28 25.813 26.867 28 24.015 28c-3.83 0-4.846-2.3-5.015-2.712Zm-10 .271 2.149-1.364c.168.508.822 1.443 1.772 1.443.949 0 1.435-.975 1.435-1.443V15h2.642v9.195c.043 1.269-.66 3.805-3.765 3.805-2.853 0-4.04-1.696-4.233-2.44Z"
                fill="#3E3E3E"
              />
            </svg>
          </Button>
          <Button size="sm" variant="light">
            <svg
              width="13"
              height="18"
              viewBox="0 -2 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              style={{ display: "block" }}
            >
              <path d="M12.736.064c.52.2.787.805.598 1.353L8.546 15.305c-.19.548-.763.83-1.282.631-.52-.2-.787-.805-.598-1.353L11.454.695c.19-.548.763-.83 1.282-.631ZM2.414 8.256 5.95 11.99c.39.412.39 1.08 0 1.492a.963.963 0 0 1-1.414 0L.293 9.003a1.098 1.098 0 0 1 0-1.493l4.243-4.48a.963.963 0 0 1 1.414 0 1.1 1.1 0 0 1 0 1.494L2.414 8.256Zm15.172 0L14.05 4.524a1.098 1.098 0 0 1 0-1.493.963.963 0 0 1 1.414 0l4.243 4.479c.39.412.39 1.08 0 1.493l-4.243 4.478a.963.963 0 0 1-1.414 0 1.098 1.098 0 0 1 0-1.492l3.536-3.733Z" />
            </svg>
          </Button>

          <Button size="sm" variant="light">
            <svg viewBox="0 0 24 24" width="13" height="18" fill="currentColor" style={{ display: "block" }}>
              <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"></path>
            </svg>
          </Button>
          <Button size="sm" variant="light">
            <svg viewBox="0 0 13 19" width="13" height="18" fill="currentColor" style={{ display: "block" }}>
              <path d="M0 10.6533H5.43896L2.26866 18.1733L12.6667 7.463H7.1986L10.3399 0L0 10.6533Z"></path>
            </svg>
          </Button>
          <Button size="sm" variant="light">
            <svg
              width="13"
              height="18"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              <path
                fill="currentColor"
                d="M6.644 2.983a.252.252 0 0 0-.253.252c0 .139.113.251.253.251h3.713c.14 0 .253-.112.253-.251a.252.252 0 0 0-.253-.252H6.644Zm3.713-1.342c.734 0 1.353.49 1.544 1.16l2.175.001c.621.004 1.122.205 1.432.638.266.372.372.85.345 1.387L15.85 17.84c.042.552-.062 1.04-.328 1.445-.312.473-.821.71-1.452.716H3.14c-.76-.03-1.323-.209-1.675-.609-.327-.371-.47-.88-.464-1.5V4.84c-.013-.6.154-1.106.518-1.48.376-.384.932-.554 1.647-.559h1.935c.19-.67.809-1.16 1.543-1.16h3.713Zm0 3.187H6.644c-.546 0-1.027-.27-1.317-.684H3.17c-.383.002-.602.07-.682.152-.091.093-.144.252-.138.531v13.07c-.003.325.052.522.13.61.054.061.286.135.685.151h10.9c.2-.002.28-.04.326-.109.091-.138.133-.334.11-.658l.001-13.096c.014-.293-.027-.482-.096-.578-.026-.035-.116-.072-.336-.073h-2.397c-.29.414-.771.684-1.317.684ZM17.2 0c.994 0 1.8.801 1.8 1.79v14.082c0 .988-.806 1.79-1.8 1.79h-1.958v-1.343h1.957c.249 0 .45-.2.45-.447V1.789a.449.449 0 0 0-.45-.447H9.643c-.248 0-.45.2-.45.447v.157h-1.35v-.157C7.843.801 8.649 0 9.643 0H17.2ZM8.196 11.751c.373 0 .675.3.675.671 0 .37-.302.671-.675.671H4.145a.673.673 0 0 1-.676-.67c0-.371.303-.672.676-.672h4.051Zm4.052-2.684c.372 0 .675.3.675.671 0 .37-.303.671-.675.671H4.145a.673.673 0 0 1-.676-.67c0-.371.303-.672.676-.672h8.103Zm0-2.684c.372 0 .675.3.675.671a.673.673 0 0 1-.675.671H4.145a.673.673 0 0 1-.676-.67c0-.371.303-.672.676-.672h8.103Z"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className={styles.rue_view_code}>
        <TextArea width="100%" height="auto" value={code?.trim("")} />
      </div>
    </div>
  );
};

View.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  code: PropTypes.string.isRequired,
  elements: PropTypes.node.isRequired,
};

View.defaultProps = {
  width: "100%",
  height: "auto",
};
export default memo(View);
