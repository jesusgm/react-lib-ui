import React, { useState } from "react";
import InputFile from "../components/fileInput/index";

export default {
  title: "File input",
};

export const FileInput = () => {
  const [files, setFiles] = useState([]);

  return (
    <div>
      <h1>Input File</h1>
      <InputFile name="file" onChange={(value) => setFiles(value)} />

      <hr />
      <pre>{JSON.stringify(files)}</pre>
    </div>
  );
};
