import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
const Readme = require("../README.md").default;

import NewComponentTemplate from "../NewComponentTemplate";

export default {
  title: "Examples/NewComponentTemplate/Default",
  component: NewComponentTemplate,
  argTypes: {
    text: { control: "text" },
  },
} as ComponentMeta<typeof NewComponentTemplate>;

// ==============================
// Traditional Node Render on Client Side
// ==============================

const Template: ComponentStory<typeof NewComponentTemplate> = (args) => (
  <NewComponentTemplate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: "Hello World",
};
Primary.parameters = {
  readme: {
    sidebar: Readme,
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "",
};
Secondary.parameters = {
  readme: {
    sidebar: Readme,
  },
};
