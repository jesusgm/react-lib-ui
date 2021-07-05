import React, { Component } from "react";
import PropTypes from "prop-types";
import Dot from "../dot";
import "./styles.css";

const propTypes = {
  images: PropTypes.array,
  activeIndex: PropTypes.number,
  goToSlide: PropTypes.func
};

class Dots extends Component {
  render() {
    const { images, activeIndex, goToSlide } = this.props;
    return (
      <div className="dots-container">
        {images.length > 0
          ? images.map((image, index) => {
              return (
                <Dot
                  key={index}
                  onClick={() => goToSlide(index)}
                  active={index === activeIndex}
                />
              );
            })
          : null}
      </div>
    );
  }
}

Dots.propTypes = propTypes;

export default Dots;
