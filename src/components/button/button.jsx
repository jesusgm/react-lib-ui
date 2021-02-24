import React from "react";

import "./styles.css";

const noop = () => {};

export const Button = (props) => {
  const { className = " ", children, type = "primary", onClick = noop } = props;

  return (
    <button
      className={`btn btn-${type} ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
