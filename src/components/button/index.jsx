import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const propTypes = {
  /**
   * A extra classname
   */
  className: PropTypes.string,
  /**
   * Type: "primary" | "secondary" or "tertiary"
   */
  type: PropTypes.oneOf("primary", "secondary", "tertiary"),
  /**
   * Fn to execute on click
   */
  onClick: PropTypes.func,
  /**
   * The button content
   */
  children: PropTypes.any.isRequired,
};

const Button = (props) => {
  const { className, children, type, onClick } = props;

  return (
    <button
      className={`btn btn-${type} ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

const noop = () => {};

Button.defaultProps = {
  className: "",
  type: "primary",
  onClick: noop,
};

Button.propTypes = propTypes;

export default Button;
