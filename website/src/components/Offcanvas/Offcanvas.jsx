// import PropTypes from "prop-types";
// import React from "react";
// import styles from "./Offcanvas.module.css";

// const OffCanvasHeader = ({ children }) => {
//   return <div className={styles.rue_offcanvas_header}>{children}</div>;
// };

// OffCanvasHeader.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// const OffCanvasBody = ({ children }) => {
//   return <div className={styles.rue_canvas_content}>{children}</div>;
// };

// OffCanvasBody.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// const OffCanvas = ({ isOpen, children, toggleCanvas, width, placement }) => {
//   // const offCanvasClass = `${styles.rue_offcanvas} ${styles.rue_canvas_content} ${isOpen ? styles.open : ""}`;

//   const offCanvasClass = `${styles.rue_offcanvas} ${styles.rue_canvas_content} ${placement ? styles[placement] : ""} ${
//     isOpen ? styles.open : ""
//   }`;

//   return (
//     <div className={offCanvasClass}>
//       {children}
//       {isOpen && <div className={`${styles.rue_overlay}`} onClick={toggleCanvas}></div>}
//     </div>
//   );
// };

// OffCanvas.propTypes = {
//   children: PropTypes.node,
//   isOpen: PropTypes.bool,
//   setIsOpen: PropTypes.func,
//   toggleCanvas: PropTypes.func,
//   width: PropTypes.string,
// };
// OffCanvas.Header = OffCanvasHeader;
// OffCanvas.Body = OffCanvasBody;
// export default OffCanvas;

import PropTypes from "prop-types";
import React from "react";
import styles from "./Offcanvas.module.css";

const OffCanvasHeader = ({ children }) => {
  return <div className={styles.rue_offcanvas_header}>{children}</div>;
};

OffCanvasHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

const OffCanvasBody = ({ children }) => {
  return <div className={styles.rue_canvas_content}>{children}</div>;
};

OffCanvasBody.propTypes = {
  children: PropTypes.node.isRequired,
};

const OffCanvas = ({ isOpen, children, toggleCanvas, width, placement }) => {
  const offCanvasClass = `${styles.rue_offcanvas} ${isOpen ? styles.open : ""} ${styles[placement] || styles.right}`;

  return (
    <div className={offCanvasClass}>
      {children}
      {isOpen && <div className={`${styles.rue_overlay}`} onClick={toggleCanvas}></div>}
    </div>
  );
};

OffCanvas.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  toggleCanvas: PropTypes.func,
  width: PropTypes.string,
  placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};
OffCanvas.Header = OffCanvasHeader;
OffCanvas.Body = OffCanvasBody;
export default OffCanvas;
