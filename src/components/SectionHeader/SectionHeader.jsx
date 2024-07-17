import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./SectionHeader.module.css";
import Box from "../Box/Box";
import Heading from "../Typography/Heading/Heading";
import Paragraph from "../Typography/Paragraph/Paragraph";

const SectionHeader = forwardRef(
  ({ children, padding = "20px", margin = "0", controls, placement = "left", size = "md", ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        style={{ padding, margin }}
        className={`${styles.rue_sectionHeader} ${styles[`rue_sectionHeader_placement-${placement}`]} ${
          styles[`rue_sectionHeader_size-${size}`]
        }`}
        {...rest}
      >
        <div className={styles.rue_sectionHeader_content}>{children}</div>
        {controls && <div className={styles.rue_sectionHeader_controls}>{controls}</div>}
      </Box>
    );
  }
);

const SectionHeaderTitle = ({ children, ...rest }) => {
  return (
    <Heading className={styles.rue_sectionHeader_title} {...rest}>
      {children}
    </Heading>
  );
};

SectionHeaderTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
const SectionHeaderSubTitle = ({ children, ...rest }) => {
  return (
    <Paragraph className={styles.rue_sectionHeader_subtitle} {...rest}>
      {children}
    </Paragraph>
  );
};

SectionHeaderSubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  controls: PropTypes.node.isRequired,
  margin: PropTypes.string,
  padding: PropTypes.string,
  placement: PropTypes.oneOf(["left", "right", "center"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};
SectionHeader.Title = SectionHeaderTitle;
SectionHeader.SubTitle = SectionHeaderSubTitle;
SectionHeader.displayName = "SectionHeader";
export default SectionHeader;
