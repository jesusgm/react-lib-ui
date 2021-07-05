import React from "react";
import "./styles.css";

const Slide = ({ image, height }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%",
    height: `${height}px`
  };

  return <div className="slide" style={styles} />;
};

export default Slide;
