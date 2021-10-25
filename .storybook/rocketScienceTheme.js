import { create } from '@storybook/theming';

const RocketScienceTheme = create({
  base: 'light', // light or dark

//   colorPrimary: 'hotpink',
//   colorSecondary: 'deepskyblue',

  // UI
//   appBg: 'white',
//   appContentBg: 'silver',
//   appBorderColor: 'grey',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#181818',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
//   barTextColor: 'silver',
//   barSelectedColor: 'black',
//   barBg: 'hotpink',

  // Form colors
//   inputBg: 'white',
//   inputBorder: 'silver',
//   inputTextColor: 'black',
//   inputBorderRadius: 4,

  brandTitle: 'Rocket Science',
  brandUrl: 'https://github.com/rocket-science-core/rocket-science',
  brandImage: 'https://i.imgur.com/K2jrKka.png',
});

export default RocketScienceTheme;