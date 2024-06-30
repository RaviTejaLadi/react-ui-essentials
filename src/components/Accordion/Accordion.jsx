import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Accordion.module.css";
import Box from "../Box/Box";
import DownArrow from "./DownArrow";

const AccordionHeader = ({ header, isActive, onClick, icon, id, variant, toogleIcon }) => {
  const getAccordionVariant = () => {
    switch (variant) {
      case "primary":
        return styles.rue_active_primary;
      case "secondary":
        return styles.rue_active_secondary;
      case "success":
        return styles.rue_active_success;
      case "danger":
        return styles.rue_active_danger;
      case "warning":
        return styles.rue_active_warning;
      case "info":
        return styles.rue_active_info;
      case "help":
        return styles.rue_active_help;
      case "dark":
        return styles.rue_active_dark;
      default:
        return styles.rue_active_primary;
    }
  };
  return (
    <div
      className={`${styles.rue_accordion_toggle} ${isActive ? `${styles.rue_active} ${getAccordionVariant()}` : ""}`}
      onClick={onClick}
    >
      <span className={styles.rue_accordion_cont}>
        {icon && <img src={icon} alt="icon" />}
        <h6 className={styles.rue_accordion_title}>
          {id}. {header}
        </h6>
      </span>
      {toogleIcon || <DownArrow className={styles.rue_accordion_icon} size="10px" />}
    </div>
  );
};
AccordionHeader.propTypes = {
  header: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  id: PropTypes.number,
  toogleIcon: PropTypes.node,
};

const AccordionBody = ({ text, isActive, contentElRef }) => (
  <div
    ref={contentElRef}
    className={`${styles.rue_down} ${isActive ? styles.rue_show : ""}`}
    style={isActive ? { height: contentElRef.current.scrollHeight } : { height: "0px" }}
  >
    <div className={styles.rue_accordion_body}>
      <p>{text}</p>
    </div>
  </div>
);

AccordionBody.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
  contentElRef: PropTypes.object,
};

const Accordion = forwardRef(
  (
    { content, icon, variant = "primary", outlined = true, rounded = true, elevation = 0, width = "", toogleIcon },
    ref
  ) => {
    const [active, setActive] = useState(null);

    const handleToggle = React.useCallback(
      (index) => {
        if (active === index) {
          setActive(null);
        } else {
          setActive(index);
        }
      },
      [active]
    );

    const contentElRef = React.useRef();
    const { header, id, text } = content;

    return (
      <Box
        elevation={elevation}
        outlined={outlined}
        rounded={rounded}
        margin="10px 10px"
        className={styles.rue_accordion_card}
        style={{ width: width }}
        ref={ref}
      >
        <AccordionHeader
          header={header}
          isActive={active === id}
          onClick={() => handleToggle(id)}
          icon={icon}
          id={id}
          variant={variant}
          toogleIcon={toogleIcon}
        />
        <AccordionBody text={text} isActive={active === id} contentElRef={contentElRef} />
      </Box>
    );
  }
);

Accordion.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.number,
    text: PropTypes.string,
  }),
  elevation: PropTypes.number,
  icon: PropTypes.any,
  outlined: PropTypes.bool,
  rounded: PropTypes.bool,
  variant: PropTypes.string,
  width: PropTypes.string,
  toogleIcon: PropTypes.node,
};
Accordion.displayName = "Accordion";
export default Accordion;
