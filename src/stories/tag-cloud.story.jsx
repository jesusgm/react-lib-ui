import React from "react";
import { TagCloud } from "../components/tag-cloud/index";
import { CodeHightlighter } from "../components/code-hightlighter";

export default {
  title: "TagCloud",
};

const imports = `
npm install react-tag-cloud --save
npm install randomcolor --save
`;

export const TagCloudExample = () => (
  <div>
    <h3>Image TagCloud</h3>
    <TagCloud
      tags={[
        { id: 1, name: "tag1", percentage: 100 },
        { id: 2, name: "tag2", percentage: 80 },
        { id: 3, name: "tag3", percentage: 90 },
        { id: 4, name: "tag4", percentage: 50 },
        { id: 5, name: "tag5", percentage: 60 },
        { id: 6, name: "tag6", percentage: 95 },
        { id: 7, name: "tag7", percentage: 100 },
      ]}
    />
    <h3>Dependencies</h3>
    <p>
      This components use <strong>"react-tag-cloud"</strong> and{" "}
      <strong>"randomcolor"</strong>.
    </p>
    <p>Install it executing:</p>
    <CodeHightlighter>{imports}</CodeHightlighter>
  </div>
);
