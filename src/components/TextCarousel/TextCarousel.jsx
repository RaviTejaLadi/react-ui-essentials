import React, { useState, useEffect, Children, cloneElement, forwardRef } from "react";
import styles from "./TextCarousel.module.css";
import Box from "../Box/Box";
import Button from "../Button/Button";

const TextCarousel = forwardRef(({ children, interval = 0, className, style }, ref) => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemCount = Children.count(children);

  const goToPrev = () => {
    setIsTransitioning(true);
    setIndex((prevIndex) => (prevIndex === 0 ? itemCount - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setIndex((prevIndex) => (prevIndex === itemCount - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (interval > 0) {
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer);
    }
  }, [interval]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const contStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ...style,
  };
  
  return (
    <Box ref={ref} padding="10px" className={className} style={contStyle}>
      <Box padding="12px" className={styles.rue_carouselContent}>
        <div className={styles.rue_carouselItem}>{cloneElement(children[index])}</div>
      </Box>
      <Box style={{ display: "flex", gap: "20px" }}>
        <Button onClick={goToPrev}>&lt;</Button>
        <Button onClick={goToNext}>&gt;</Button>
      </Box>
    </Box>
  );
});

TextCarousel.displayName = "TextCarousel";
export default TextCarousel;
