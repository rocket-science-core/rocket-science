import React from "react";
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  const Readme = require("../README.md").default;
  
  import SomeExample from "../SomeExample";
  
  export default {
    title: "Newly Generated/SomeExample/Default",
    component: SomeExample,
    argTypes: {
      text: { control: "text" },
    },
  } as ComponentMeta<typeof SomeExample>;
  
  // ==============================
  // Traditional Node Render on Client Side
  // ==============================
  
  const Template: ComponentStory<typeof SomeExample> = (args) => (
    <SomeExample {...args} />
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