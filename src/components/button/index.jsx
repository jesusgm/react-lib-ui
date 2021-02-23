import React from "react";

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

export default Button;
