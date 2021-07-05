import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.any,
  head: PropTypes.bool
};

function Cell(props) {
  return (
    <td className={`table-cell ${props.head ? "header-cell" : ""}`}>
      {props.children}
    </td>
  );
}

Cell.propTypes = propTypes;

export default Cell;
