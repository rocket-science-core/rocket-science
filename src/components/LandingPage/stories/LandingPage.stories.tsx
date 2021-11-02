import React from "react";
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  const Readme = require("../README.md").default;
  
  import LandingPage from "../LandingPage";
  
  export default {
    title: "Pages/LandingPage/Default",
    component: LandingPage,
    argTypes: {
      text: { control: "text" },
    },
  } as ComponentMeta<typeof LandingPage>;
  
  // ==============================
  // Traditional Node Render on Client Side
  // ==============================
  
  const Template: ComponentStory<typeof LandingPage> = (args) => (
    <LandingPage {...args} />
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