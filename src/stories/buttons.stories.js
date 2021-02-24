import React from "react";

import { Button } from "../components/button/";

export default {
  title: "Buttons",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <Button
    {...args}
    children="Lorem ipsum dolor sit amet"
    onClick={() => console.log("cliked!")}
  />
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  type: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  type: "secondary",
};

export const TertiaryButton = Template.bind({});
TertiaryButton.args = {
  type: "tertiary",
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  type: "custom",
};
