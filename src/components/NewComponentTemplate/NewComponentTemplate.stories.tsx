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

// ==============================
// Module Federation MFE Render on Client Side
//
// Notes:
// - This is a special case where we are using the DynamicRemoteContainer
// - This is a special case where we are not following the steps below
//   because this default component is already configured in the 
//   ModuleFederationComponent
// 
// Directions:
// 1. Make Sure you add the component to the "exposes" 
//    in webpack.config.js ModuleFederationPlugin
// 
// 2. Uncomment the code below
//
// 3. Run $ yarn story
//
// ==============================

const ModFedTemplate: ComponentStory<typeof NewComponentTemplate> = (args) => (
  <DynamicRemoteContainer {...args} />
);

export const ModFedPrimary = ModFedTemplate.bind({});
ModFedPrimary.args = {
  text: "Hello World",
  url: "http://localhost:3001/remoteEntry.js",
  scope: "RocketScience",
  module: "./NewComponentTemplate",
};
ModFedPrimary.parameters = {
  readme: {
    sidebar: Readme,
  },
};

export const ModFedSecondary = ModFedTemplate.bind({});
ModFedSecondary.args = {
  text: "",
  url: "http://localhost:3001/remoteEntry.js",
  scope: "RocketScience",
  module: "./NewComponentTemplate",
};
ModFedSecondary.parameters = {
  readme: {
    sidebar: Readme,
  },
};
