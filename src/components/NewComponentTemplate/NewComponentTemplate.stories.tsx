import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DynamicRemoteContainer from "../../util/hooks/DynamicRemoteContainer";
const Readme = require("./README.md").default;

import NewComponentTemplate from "./NewComponentTemplate";

export default {
  title: "Examples/NewComponentTemplate",
  component: NewComponentTemplate,
  argTypes: {
    text: { control: "text" },
  },
} as ComponentMeta<typeof NewComponentTemplate>;

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

const ModFedTemplate: ComponentStory<typeof NewComponentTemplate> = (args) => (
  <DynamicRemoteContainer {...args} />
);
export const ModFedPrimary = ModFedTemplate.bind({});
ModFedPrimary.args = {
  text: "Hello World",
  url: "http://localhost:8080/remoteEntry.js",
  scope: "RocketScience",
  module: "./NewComponentTemplate"
};
ModFedPrimary.parameters = {
  readme: {
    sidebar: Readme,
  },
};
export const ModFedSecondary = ModFedTemplate.bind({});
ModFedSecondary.args = {
  text: "",
  url: "http://localhost:8080/remoteEntry.js",
  scope: "RocketScience",
  module: "./NewComponentTemplate"
};
ModFedSecondary.parameters = {
  readme: {
    sidebar: Readme,
  },
};