import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import marked from 'marked';
const Readme = require("./README.md").default;



import NewComponentTemplate from './NewComponentTemplate';

export default {
  title: 'Examples/NewComponentTemplate',
  component: NewComponentTemplate,
  argTypes: {
    text: { control: 'text' },
  },
} as ComponentMeta<typeof NewComponentTemplate>;

const Template: ComponentStory<typeof NewComponentTemplate> = (args) => <NewComponentTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Hello World',
};
Primary.parameters = {
    readme:{
        sidebar: marked(Readme)
    }
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: '',
};
Secondary.parameters = {
    readme:{
        sidebar: Readme
    }
};