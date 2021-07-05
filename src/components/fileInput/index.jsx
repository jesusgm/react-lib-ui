import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "../icon/";
import "./styles.css";

const propTypes = {
  /** Value */
  value: PropTypes.array,
  /** Name of the field */
  name: PropTypes.string.isRequired,
  /** Function thats will be called after change */
  onChange: PropTypes.func.isRequired,
};

class FileInput extends Component {
  constructor(props) {
    super(props);

    this.id = Math.floor(Math.random() * 100000 + 1);
    this.fileReaders = [];
    this.fileInputRef = new React.createRef();
    this.dropAreaRef = new React.createRef();

    this.state = {
      fileList: props.value ? props.value : [],
    };

    this.handleFile = this.handleFile.bind(this);
    this.asignEventListeners = this.asignEventListeners.bind(this);
    this.readFileContent = this.readFileContent.bind(this);
  }

  componentDidUpdate() {
    const { onChange } = this.props;
    const { fileList } = this.state;
    onChange(fileList);
  }

  componentDidMount() {
    window.addEventListener("DOMContentLoaded", this.asignEventListeners());
  }

  asignEventListeners() {
    this.fileInputRef.current.addEventListener(
      "change",
      this.handleFile,
      false
    );
    this.dropAreaRef.current.addEventListener(
      "click",
      () => this.fileInputRef.current.click(),
      false
    );
    this.dropAreaRef.current.addEventListener(
      "dragover",
      this.handleDragOver,
      false
    );
    this.dropAreaRef.current.addEventListener("drop", this.handleFile, false);
  }

  handleFile(event) {
    const { fileList } = this.state;

    event.stopPropagation();
    event.preventDefault();

    const files = Array.from(event.target.files || event.dataTransfer.files);
    files.map((file, index) => {
      const fr = new FileReader();
      fr.onload = () => this.readFileContent(file, fileList.length + index);
      this.fileReaders[fileList.length + index] = fr;
      fr.readAsText(file);

      // this.fileReaders[this.fileReaders.length + index] = new FileReader();
      // this.fileReaders[
      //   this.fileReaders.length + index
      // ].onload = this.readFileContent(file, this.fileReaders.length + index);
      // this.fileReaders[this.fileReaders.length + index].readAsText(file);
    });
  }

  readFileContent(file, index) {
    this.setState((prevState) => ({
      fileList: [
        ...prevState.fileList,
        {
          name: file.name,
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          size: file.size,
          type: file.type,
          content: this.fileReaders[index].result,
        },
      ],
    }));
  }

  handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "copy"; // Explicitly show this is a copy.
  }

  render() {
    const { name } = this.props;
    const { fileList } = this.state;

    return (
      <div>
        <div
          className={`drop-area drop-area-${this.id}`}
          ref={this.dropAreaRef}
        >
          Arrasta ficheros aquí
        </div>
        <input
          className="file-input-field"
          id={`file-input-${this.id}`}
          ref={this.fileInputRef}
          type="file"
          name={name}
          multiple
        />
        <ul className="file-list">
          {fileList.map((file, i) => (
            <span className="file" key={file.name + i}>
              <Icon name="file" className="icon" />
              <span className="file-name">{file.name}</span>
              <span
                className="close"
                onClick={() =>
                  this.setState((prevState) => ({
                    fileList: prevState.fileList.filter((f, fi) => i !== fi),
                  }))
                }
              >
                <Icon name="times" />
              </span>
            </span>
          ))}
        </ul>
      </div>
    );
  }
}

FileInput.propTypes = propTypes;

export default FileInput;
