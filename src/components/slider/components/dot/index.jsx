import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func
};

const Dot = ({ active, onClick }) => (
  <span onClick={() => onClick()} className={`dot ${active ? "active" : ""}`} />
);

Dot.propTypes = propTypes;

export default Dot;
