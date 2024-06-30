import PropTypes from "prop-types";
import React, { useContext } from "react";
import styles from "./Content.module.css";
import ParentContext from "../../../context/ParentContext";
import { useFirstRender, useDarkMode } from "react-ui-essentials";

const Content = ({ children }) => {
  const { state } = useContext(ParentContext);
  const { pageType } = state;

  const { mode, setMode } = useDarkMode();

  const firstRender = useFirstRender();
  if (firstRender) return null;

  const modes = ["light", "dark", "system"];

  const contentContainer = `${styles.content_container} ${pageType ? `${styles[`home`]}` : ""} ${
    pageType ? `${styles[`component`]}` : ""
  }`;

  return (
    <div className={contentContainer}>
      {/* <div className="wrapper" style={{ maxWidth: "600px", padding: "8px 16px", border: "1px solid #999" }}>
        <p>
          Current mode: <strong>{mode}</strong>
        </p>
        <div className="buttons">
          {modes.map((mode) => (
            <button key={mode} style={{ display: "flex", gap: "8px" }} onClick={() => setMode(mode)}>
              {mode}
            </button>
          ))}
        </div>
        <p>
          Note: This component does not render on the server, since you cannot read user preference from the browser
          cookies on the server. However noflash.min.js will take care of loading the preference as soon as possible and
          as a result user will see the background of the page according to his preference for the whole rendering time.{" "}
        </p>
      </div> */}
      {children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Content;
