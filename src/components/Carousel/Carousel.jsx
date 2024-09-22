import PropTypes from "prop-types";
import React, { useState, forwardRef, createContext, useContext } from "react";
import styles from "./Carousel.module.css";
import Box from "../Box/Box";

const CarouselContext = createContext();

const sizeMap = {
  sm: { width: "500px", height: "400px" },
  md: { width: "600px", height: "500px" },
  lg: { width: "700px", height: "600px" },
  xl: { width: "1000px", height: "700px" },
};

const Carousel = forwardRef(
  (
    { size = "sm", width, height, borderRadius = "5px", padding = "10px", children, className, style, ...rest },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slides, setSlides] = useState([]);

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const containerStyle = {
      width: width || sizeMap[size].width,
      height: height || sizeMap[size].height,
      borderRadius,
      ...style,
    };

    const contextValue = {
      currentIndex,
      setCurrentIndex,
      slides,
      setSlides,
      goToPrevious,
      goToNext,
    };

    return (
      <CarouselContext.Provider value={contextValue}>
        <Box
          ref={ref}
          padding={padding}
          className={`${styles.rue_carouselContainer} ${className || ""}`}
          style={containerStyle}
          {...rest}
        >
          {children}
        </Box>
      </CarouselContext.Provider>
    );
  }
);

const CarouselSlides = ({ children, className, style }) => {
  const { currentIndex, setSlides } = useContext(CarouselContext);

  React.useEffect(() => {
    setSlides(React.Children.toArray(children));
  }, [children, setSlides]);

  return (
    <div className={`${styles.rue_carousel} ${className || ""}`} style={style}>
      {React.Children.toArray(children)[currentIndex]}
    </div>
  );
};

const CarouselContent = ({ children, className, style }) => {
  const { currentIndex } = useContext(CarouselContext);
  return (
    <div className={`${styles.rue_title} ${className || ""}`} style={style}>
      {React.Children.toArray(children)[currentIndex]}
    </div>
  );
};

const CarouselControls = ({ children, className, style }) => {
  const { goToPrevious, goToNext } = useContext(CarouselContext);

  return (
    <div className={`${styles.rue_navigation} ${className || ""}`} style={style}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onClick: child.props.onClick === goToPrevious ? goToPrevious : goToNext,
        })
      )}
    </div>
  );
};

const CarouselDots = ({ className, style }) => {
  const { currentIndex, setCurrentIndex, slides } = useContext(CarouselContext);

  return (
    <div className={`${styles.rue_dotsContainer} ${className || ""}`} style={style}>
      {slides.map((_, index) => (
        <span
          key={index}
          className={`${styles.rue_dot} ${index === currentIndex ? styles.rue_activeDot : ""}`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
};

Carousel.Slides = CarouselSlides;
Carousel.Content = CarouselContent;
Carousel.Controls = CarouselControls;
Carousel.Dots = CarouselDots;

Carousel.propTypes = {
  borderRadius: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Carousel.displayName = "Carousel";

export default Carousel;
