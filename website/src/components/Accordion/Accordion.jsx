import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Accordion.module.css";
import { Box } from "react-ui-essentials";

const AccordionHeader = ({ header, isActive, onClick, icon, id }) => (
  <div className={`${styles.rue_accordion_toggle} ${isActive ? styles.rue_active : ""}`} onClick={onClick}>
    <span className={styles.rue_accordion_cont}>
      {icon && <img src={icon} alt="icon" />}
      <h5 className={styles.rue_accordion_title}>
        {id}. {header}
      </h5>
    </span>
    {/* <FontAwesomeIcon className="accordion-icon" icon={faCaretDown} /> */}
  </div>
);
AccordionHeader.propTypes = {
  header: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
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
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  contentElRef: PropTypes.object.isRequired,
};

const Accordion = (props) => {
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
  const { content, icon } = props;
  const { header, id, text } = content;

  return (
    <Box elevation={1} rounded margin="10px 10px" className={styles.rue_accordion_card}>
      <div className={styles.rue_accordion_header}>
        <AccordionHeader
          header={header}
          isActive={active === id}
          onClick={() => handleToggle(id)}
          icon={icon}
          id={id}
        />
      </div>
      <AccordionBody text={text} isActive={active === id} contentElRef={contentElRef} />
    </Box>
  );
};

Accordion.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  icon: PropTypes.any,
};

export default Accordion;
export { AccordionHeader, AccordionBody };
