import React from "react";
import "./styles.css";

const LeftArrow = props => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
