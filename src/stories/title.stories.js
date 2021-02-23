import React from "react";

import { Title } from "../components/title/";

export default {
  title: "Title",
  component: Title,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Title {...args} />;

export const FirstLevel = Template.bind({});
FirstLevel.args = {
  level: 1,
  children: "Lorem ipsum dolor sit amet",
};

export const SecondaryLevel = Template.bind({});
SecondaryLevel.args = {
  level: 2,
  children: "Lorem ipsum dolor sit amet",
};

export const ThirdLevel = Template.bind({});
ThirdLevel.args = {
  level: 3,
  children: "Lorem ipsum dolor sit amet",
};

export const FourthLevel = Template.bind({});
FourthLevel.args = {
  level: 4,
  children: "Lorem ipsum dolor sit amet",
};

export const FivethLevel = Template.bind({});
FivethLevel.args = {
  level: 5,
  children: "Lorem ipsum dolor sit amet",
};

export const SixthLevel = Template.bind({});
SixthLevel.args = {
  level: 6,
  children: "Lorem ipsum dolor sit amet",
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  align: "center",
  level: 3,
  children: "Lorem ipsum dolor sit amet",
};

export const AlignRight = Template.bind({});
AlignRight.args = {
  align: "right",
  level: 3,
  children: "Lorem ipsum dolor sit amet",
};
