import React from "react";
import "./styles.css";

const RightArrow = props => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right" aria-hidden="true" />
    </div>
  );
};

export default RightArrow;
