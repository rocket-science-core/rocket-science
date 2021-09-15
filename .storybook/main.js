module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    'storybook-readme',
    '@storybook/addon-jest',
    "@storybook/addon-links",
    '@storybook/addon-a11y',
    'storybook-addon-performance/register',
    {name: "@storybook/addon-essentials", options: {actions: false}}
  ]
}