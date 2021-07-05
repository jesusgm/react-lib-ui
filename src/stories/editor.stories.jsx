import React, { useState } from "react";
import { Editor } from "../components/editor/editor";
import { CodeHightlighter } from "../components/code-hightlighter/code-hightlighter";

export default {
  title: "Editor",
  // component: Editor,
};

const imports = `    
npm install --save @ckeditor/ckeditor5-react 
npm install --save @ckeditor/ckeditor5-build-classic
`;

export const Default = () => {
  const [content, setContent] = useState("");

  return (
    <div>
      <h2>Editor</h2>
      <h3>Example</h3>
      <Editor value={content} onChange={setContent} />
      <hr />
      <CodeHightlighter lang="html">{content}</CodeHightlighter>

      <h3>Dependencies</h3>
      <CodeHightlighter lang="bash">{imports}</CodeHightlighter>
    </div>
  );
};
