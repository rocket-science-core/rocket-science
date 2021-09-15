import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Readme from './README.md';

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
        sidebar: Readme
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