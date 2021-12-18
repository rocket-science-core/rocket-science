import React from "react";
const Readme = require("../README.md").default;

import NewComponentTemplate from "../NewComponentTemplate";

export default {
  title: "Templates & Guides/NewComponentTemplate/Default",
  component: NewComponentTemplate,
  argTypes: {
    text: { control: "text" },
  },
};

// ==============================
// Traditional Node Render on Client Side
// ==============================

const Template = (args) => (
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
