// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import RocketScienceTheme from './rocketScienceTheme'

addons.setConfig({
  theme: RocketScienceTheme,
});