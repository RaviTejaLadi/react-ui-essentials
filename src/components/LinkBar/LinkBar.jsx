import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./LinkBar.module.css";
import Link from "../Link/Link";
import Box from "../Box/Box";
import Button from "../Button/Button";
import { ArrowLeft, ArrowRight } from "../../Icons/Round";

const LinkBar = forwardRef(
  (
    {
      controlsSize = "sm",
      controlsVariant = "light",
      showControls = true,
      width = "100%",
      height = "40px",
      links,
      activeLinkUrl,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const linkBarRef = useRef(null);

    const scroll = (direction) => {
      const scrollAmount = 200;
      const scrollOptions = {
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      };
      linkBarRef.current.scrollBy(scrollOptions);
    };

    return (
      <Box
        ref={ref}
        width={width}
        height={height}
        className={`${styles.rue_linkbar_container} ${className}`}
        style={style}
        {...rest}
      >
        {showControls && (
          <Button size={controlsSize} variant={controlsVariant} onClick={() => scroll("left")}>
            <Button.Icon>
              <ArrowLeft width="20px" height="20px" />
            </Button.Icon>
          </Button>
        )}
        <Box ref={linkBarRef} className={styles.rue_linkBar}>
          {links.map((link, index) => (
            <Link
              key={`${index}-${link.name}`}
              to={link.url}
              className={`${styles.rue_link} ${link.url === activeLinkUrl ? styles.rue_link_active : ""}`}
            >
              {link.startIcon && <span className={styles.rue_link_start_icon}>{link.startIcon}</span>}
              <span className={styles.rue_link_text}>{link.name}</span>
              {link.endIcon && <span className={styles.rue_link_end_icon}>{link.endIcon}</span>}
            </Link>
          ))}
        </Box>
        {showControls && (
          <Button size={controlsSize} variant={controlsVariant} onClick={() => scroll("right")}>
            <Button.Icon>
              <ArrowRight width="20px" height="20px" />
            </Button.Icon>
          </Button>
        )}
      </Box>
    );
  }
);

LinkBar.propTypes = {
  controlsVariant: PropTypes.string,
  controlsSize: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      startIcon: PropTypes.node,
      endIcon: PropTypes.node,
    })
  ).isRequired,
  showControls: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  activeLinkUrl: PropTypes.string,
};

LinkBar.displayName = "LinkBar";
export default LinkBar;
