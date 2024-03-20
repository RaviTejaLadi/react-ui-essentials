import React, { Fragment } from "react";
import styles from "./Slider.module.css";

export const RenderSlides = ({ slides }) => {
    return (
        <Fragment>
            {slides.map((item, index) => (
                <div
                    className={styles.rue_each_slide}
                    key={index}
                    style={{
                        backgroundImage: item.eachSlide,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                ></div>
            ))}
        </Fragment>
    );
};
