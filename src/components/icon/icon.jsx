import React, { useState, useEffect } from "react";

import "./font-awesome/css/all.min.css";
import "./line-awesome/css/line-awesome.min.css";

export const Icon = ({ font, name, brand, spin, size, pulse, className }) => {
  let [icon, setIcon] = useState("");

  useEffect(async () => {
    let importedIcon = await import(`./bootstrap-icons/${name}.svg`);
    setIcon(importedIcon.default);
  }, []);

  if (font === "bootstrap") {
    return (
      <span className="icon bootstrap">
        <img src={icon} alt={name} />
      </span>
    );
  }

  return (
    <span
      className={`icon ${spin ? "fa-spin" : ""} ${pulse ? "fa-pulse" : ""} ${
        brand ? "fab" : "fa"
      } ${size ? `fa-${size}` : ""} ${font}-${name} ${className}`}
    />
  );
};

Icon.defaultProps = {
  font: "fa",
  brand: false,
  spin: false,
  pulse: false,
  size: "",
  className: "",
};
