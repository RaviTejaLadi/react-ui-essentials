import React, { memo, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./LinkBar.module.css";
import Link from "../Link/Link";
import Box from "../Box/Box";
import Button from "../Button/Button";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const LinkBar = ({ links }) => {
  const linkBarRef = useRef(null);
  const scroll = (direction) => {
    if (direction === "left") {
      linkBarRef.current.scrollLeft -= 200;
    } else {
      linkBarRef.current.scrollLeft += 200;
    }
  };
  return (
    <Box width="100%" height="35px" elevation={1} rounded margin="4px" className={styles.rue_linkbar_container}>
      <Button size="sm" variant="dark" onClick={() => scroll("left")}>
        <LeftArrow width="10px" height="10px" />
      </Button>
      <Box boxRef={linkBarRef} className={styles.rue_linkBar}>
        {links.map((link, index) => (
          <Link key={index} to={link.url} className={styles.rue_link}>
            {link.name}
          </Link>
        ))}
      </Box>
      <Button size="sm" variant="dark" onClick={() => scroll("right")}>
        <RightArrow width="10px" height="10px" />
      </Button>
    </Box>
  );
};

LinkBar.propTypes = {
  links: PropTypes.shape({
    map: PropTypes.func,
  }),
};
export default memo(LinkBar);
