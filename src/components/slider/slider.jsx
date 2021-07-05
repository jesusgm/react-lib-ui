import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Slide from "./components/slide";
import LeftArrow from "./components/arrows/left-arrow";
import RightArrow from "./components/arrows/right-arrow";
import Dots from "./components/dots";

import "./styles.css";

const propTypes = {
  /** Activates autoslides every X number of seconds */
  autoSlideSeconds: PropTypes.number,
  /** Activate next and previous arrows */
  arrows: PropTypes.bool,
  /** Activate navigations dots */
  dots: PropTypes.bool,
  /** Set custom slider height */
  height: PropTypes.number,
};

export class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.importImages(
        require.context("./images", false, /\.(png|jpe?g|svg)$/)
      ),
      currentIndex: 0,
      translateValue: 0,
    };

    this.timmer = null;

    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToIndexSlide = this.goToIndexSlide.bind(this);
    this.importImages = this.importImages.bind(this);
    this.restartTimmer = this.restartTimmer.bind(this);
  }

  componentDidMount() {
    const { autoSlideSeconds } = this.props;

    if (autoSlideSeconds) {
      this.restartTimmer();
    }
  }

  importImages(r) {
    return r.keys().map(r);
  }

  restartTimmer() {
    const { autoSlideSeconds } = this.props;

    if (this.timmer) {
      clearTimeout(this.timmer);
    }

    this.timmer = setTimeout(
      () => this.goToNextSlide(),
      autoSlideSeconds * 1000 || 2000
    );
  }

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  goToNextSlide() {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    this.restartTimmer();

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  }

  goToPrevSlide() {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1,
        translateValue: (this.state.images.length - 1) * this.slideWidth() * -1,
      });
    }

    this.restartTimmer();

    // This will not run if we met the if condition above
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  }

  goToIndexSlide(index) {
    this.restartTimmer();

    this.setState((prevState) => ({
      currentIndex: index,
      translateValue: index * this.slideWidth() * -1,
    }));
  }

  render() {
    const { height, arrows, dots } = this.props;

    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.5s",
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide height={height || 350} key={i} image={image} />
          ))}
        </div>
        <div className="container elements-container">
          {dots ? (
            <Dots
              images={this.state.images || []}
              activeIndex={this.state.currentIndex}
              goToSlide={this.goToIndexSlide}
            />
          ) : null}
          {arrows ? (
            <Fragment>
              <LeftArrow goToPrevSlide={this.goToPrevSlide} />
              <RightArrow goToNextSlide={this.goToNextSlide} />
            </Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}

Slider.propTypes = propTypes;
