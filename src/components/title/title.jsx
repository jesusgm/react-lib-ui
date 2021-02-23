import React from "react";

import "./styles.css";

export const Title = (props) => {
  const { level, className, children, onBack, align } = props;

  const algn = align ? `align-${align}` : "";
  const lvl = level ? `level-${level}` : "";

  switch (level) {
    case 1:
      return (
        <h1 className={`${className || ""} ${algn} ${lvl}`}>{children}</h1>
      );
    case 2:
      return (
        <h2 className={`${className || ""} ${algn} ${lvl}`}>{children}</h2>
      );
    case 3:
      return (
        <h3 className={`${className || ""} ${algn} ${lvl}`}>{children}</h3>
      );
    case 4:
      return (
        <h4 className={`${className || ""} ${algn} ${lvl}`}>{children}</h4>
      );
    case 5:
      return (
        <h5 className={`${className || ""} ${algn} ${lvl}`}>{children}</h5>
      );
    case 6:
      return (
        <h6 className={`${className || ""} ${algn} ${lvl}`}>{children}</h6>
      );
  }
};

Title.defaultProps = {
  level: 1,
  align: "left",
};
