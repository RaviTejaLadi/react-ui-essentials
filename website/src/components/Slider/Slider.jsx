import React, { useEffect, useState } from "react";
import { Button } from "react-ui-essentials";
import styles from "./Slider.module.css";
import { RenderSlides } from "./RenderSlides";
import { RenderDots } from "./RenderDots";
import { RenderArrows } from "./RenderArrows";
import { RenderPlayStop } from "./RenderPlayStop";

const slides = [
  { eachSlide: "url(https://unsplash.it/1900/1024/?image=497)" },
  { eachSlide: "url(https://unsplash.it/1900/1024/?image=291)" },
  { eachSlide: "url(https://unsplash.it/1900/1024/?image=786)" },
  { eachSlide: "url(https://unsplash.it/1900/1024/?image=768)" },
  { eachSlide: "url(https://unsplash.it/1900/1024/?image=726)" },
  { eachSlide: "url(https://unsplash.it/1900/1024/?image=821)" },
];
const Slider = ({ width, height, border, borderRadius, showDots, showAutoPlay, autoPlaySize, autoPlayVarient }) => {
  const containerStyles = {
    width: width || "auto",
    height: height || "auto",
    border: border || "1px solid transperent",
    borderRadius: borderRadius || "5px",
  };
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(0);
  const max = slides.length;
  const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1);
  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 3000);
    return () => clearInterval(interval);
  });
  const toggleAutoPlay = () => setAutoplay(!autoplay);
  const nextOne = () => active < max - 1 && setActive(active + 1);
  const prevOne = () => active > 0 && setActive(active - 1);
  const isActive = (value) => active === value && "active";
  const setSliderStyles = () => {
    const transition = active * -100;
    return { width: slides.length * 100 + "vw", transform: "translateX(" + transition + "vw)" };
  };
  return (
    <section className={styles.rue_slider} style={containerStyles}>
      <div className={styles.rue_wrapper} style={setSliderStyles()}>
        <RenderSlides slides={slides} />
      </div>
      <RenderArrows nextOne={nextOne} prevOne={prevOne} />
      {showDots && (
        <ul className={styles.rue_dots_container}>
          <RenderDots slides={slides} setActive={setActive} isActive={isActive} />
        </ul>
      )}
      {showAutoPlay && (
        <Button
          size={autoPlaySize}
          variant={autoPlayVarient}
          className={styles.rue_toggle_play}
          onClick={toggleAutoPlay}
        >
          <RenderPlayStop autoplay={autoplay} />
        </Button>
      )}
    </section>
  );
};
export default Slider;
