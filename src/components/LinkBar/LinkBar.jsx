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
      showControls = false,
      width = "100%",
      height = "35px",
      links,
      ...rest
    },
    ref
  ) => {
    const linkBarRef = useRef(null);
    const scroll = (direction) => {
      if (direction === "left") {
        linkBarRef.current.scrollLeft -= 200;
      } else {
        linkBarRef.current.scrollLeft += 200;
      }
    };

    return (
      <Box
        ref={ref}
        width={width}
        height={height}
        elevation={1}
        rounded
        margin="4px"
        className={styles.rue_linkbar_container}
        {...rest}
      >
        {showControls && (
          <Button size={controlsSize} variant={controlsVariant} onClick={() => scroll("left")}>
            <Button.Icon>
              <ArrowLeft width="20px" height="20px" />
            </Button.Icon>
          </Button>
        )}
        <Box boxRef={linkBarRef} className={styles.rue_linkBar}>
          {links.map((link, index) => (
            <Link key={`${index}-${link.name}`} to={link.url} className={styles.rue_link}>
              {link.icon} {link.name}
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
  links: PropTypes.shape({
    map: PropTypes.func,
  }),
  showControls: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

LinkBar.displayName = "LinkBar";
export default LinkBar;
