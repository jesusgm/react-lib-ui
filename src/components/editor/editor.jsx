import React from "react";
import PropTypes from "prop-types";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./styles.css";

const propTypes = {
  /** Value of editor content */
  value: PropTypes.string,
  /** Function thats triggers on each change */
  onChange: PropTypes.func,
  /** Function that is trigger on loses focus */
  onBlur: PropTypes.func,
  /** Function that is trigger on catch focus */
  onFocus: PropTypes.func,
};

export const Editor = (props) => {
  const { onChange, value } = props;

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          onChange(data);
        }}
        onBlur={(editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

Editor.propTypes = propTypes;
