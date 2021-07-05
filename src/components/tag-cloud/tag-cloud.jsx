import React, { Component } from "react";
import PropTypes from "prop-types";
import { default as ReactTagCloud } from "react-tag-cloud";
import randomColor from "randomcolor";
import "./styles.css";

const propTypes = {
  /** Array of tags.
   * One tag must be have this structure:
   *  {
   *    id: number,
   *    name: string,
   *    percentage: number between 0 and 100
   *  }
   */
  tags: PropTypes.arrayOf(PropTypes.object),
};

export class TagCloud extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 5000);
  }
  render() {
    const { tags } = this.props;

    return (
      <div className="tag-cloud-container">
        <ReactTagCloud
          className="tag-cloud"
          random={Math.random}
          style={{
            fontFamily: "sans-serif",
            fontSize: 13,
            color: () => randomColor(),
            padding: 10,
            width: "100%",
            height: "500px",
          }}
        >
          {tags.map((tag) => (
            <div
              key={tag.id}
              style={{
                fontSize: tag.percentage / 4,
                fontStyle: Math.random() > 0.8 ? "italic" : "normal",
                fontWeight:
                  tag.percentage > 90 && Math.random() < 0.5
                    ? "bold"
                    : "normal",
              }}
              rotate={Math.random() > 0.99 ? -90 : 0}
            >
              {tag.name}
            </div>
          ))}
        </ReactTagCloud>
      </div>
    );
  }
}

TagCloud.propTypes = propTypes;
