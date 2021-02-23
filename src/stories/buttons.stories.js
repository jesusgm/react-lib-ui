import React from "react";

import Button from "../components/button/";

export default {
  title: "Buttons",
  component: Button,
};

export const Buttons = () => (
  <div>
    <h2>Primary</h2>
    <Button type="primary" onClick={() => console.log("cliked!")}>
      Primary
    </Button>

    <h2>Secondary</h2>
    <Button type="secondary" onClick={() => console.log("cliked!")}>
      Secondary
    </Button>

    <h2>Tertiary</h2>
    <Button type="tertiary" onClick={() => console.log("cliked!")}>
      Tertiary
    </Button>
  </div>
);
