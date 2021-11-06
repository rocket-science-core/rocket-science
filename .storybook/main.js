module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  'addons': [
    'storybook-readme',
    '@storybook/addon-jest',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    'storybook-addon-performance/register',
    '@storybook/addon-storysource',
    '@washingtonpost/storybook-addon-web-vitals',
    {name: '@storybook/addon-essentials', options: {actions: false}}
  ]
}