import React from "react";
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  const Readme = require("../README.md").default;
  
  import SideNav from "../SideNav";
  
  export default {
    title: "Components/SideNav/Default",
    component: SideNav,
    argTypes: {
      text: { control: "text" },
    },
  } as ComponentMeta<typeof SideNav>;
  
  // ==============================
  // Traditional Node Render on Client Side
  // ==============================
  
  const Template: ComponentStory<typeof SideNav> = (args) => (
    <SideNav {...args} />
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