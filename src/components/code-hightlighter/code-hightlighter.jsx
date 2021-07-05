import React, { Component } from "react";
import PropTypes from "prop-types";
import Highlight from "react-highlight.js";
import "./railscasts.css";

const propTypes = {
  lang: PropTypes.string,
  children: PropTypes.string,
};

export class CodeHightlighter extends Component {
  render() {
    const { children, lang } = this.props;
    return <Highlight language={lang}>{children}</Highlight>;
  }
}

CodeHightlighter.propTypes = propTypes;
