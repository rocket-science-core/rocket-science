# 📝 Summary

An opinionated UI Workbench featuring tools like react, styled components, typescript, webpack, jest and storybook all bundled into an easy to use interface

# 🎯 Goals

- [x]  Build UI components/pages in isolation
- [x]  Display test coverage and documentation for each component
- [x]  Complete control of dynamic input values for each component for edge case testing
- [x]  Easily view all device sizes
- [x]  Performance metrics for both server and client
- [x]  ADA accessibility audit for each component
- [x]  Easily create a new component from a CLI
- [ ]  Mock API
- [ ]  DOM Events

- [x]  Client Render
- [x]  Micro Frontend Render
- [ ]  Server Side Render
- [ ]  Static Site Generation

# 🤖 Technologies

## React

[Getting Started - React](https://reactjs.org/docs/getting-started.html)

## Storybook

[Introduction to Storybook](https://storybook.js.org/docs/react/get-started/introduction)

[Component Story Format 3.0](https://storybook.js.org/blog/component-story-format-3-0/)

## Module Federation

[Module Federation | webpack](https://webpack.js.org/concepts/module-federation/)

[Introducing Module Federation in Webpack 5](https://www.youtube.com/watch?v=D3XYAx30CNc)

## Typescript

[The starting point for learning TypeScript](https://www.typescriptlang.org/docs/)

[No BS TS](https://www.youtube.com/playlist?list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n)

## Jest Tests TS

[How to Test React Components in TypeScript](https://www.pluralsight.com/guides/how-to-test-react-components-in-typescript)

## Styled Components

[styled-components: Documentation](https://styled-components.com/docs)

# ▶ Getting Started

## Clone Locally

1. Run  $ git clone [https://github.com/SketchLagoon/rocket-science.git](https://github.com/SketchLagoon/rocket-science.git) 
2. Run   $ cd rocket-science  
3. Run  $ yarn 
4. Run  $ yarn test 
5. Run  $ yarn story 
    1. deletes ./dist folder holding previous builds
    2. runs webpack build in watch mode
        1. leaves the node process running to listen for changes
        2. generates new build on saved changes
    3. starts storybook
    4. starts federated module CDN server

## Create Rocket Science App with CLI

1. Run  $ npx create-rs-app 
2. Provide the CLI prompt the name you want to give your project
3. Run  $ cd your-project-name  to change directories into your new project
4. Install dependencies by running  $ yarn 
5. Generate test results for storybook tests addon by running  $ yarn test 
6. Start the Rocket Science workbench by running  $ yarn story 
    1. deletes ./dist folder holding previous builds
    2. runs webpack build in watch mode
        1. leaves the node process running to listen for changes
        2. generates new build on saved changes
    3. starts storybook
    4. starts federated module CDN server
7. Tab should open in your browser on [localhost:6006](http://localhost:6006) with storybook 

## 🧩 Generate New Component

1. Run  $ yarn generate-component 
2. Provide the CLI prompt the name you want to give your component
    1. example: *yourComponentNameHere*
3. Check for the following files under *./src/components/yourComponentNameHere*
    - index.ts
    - yourComponentNameHere.tsx
    - yourComponentNameHere.styles.ts
    - yourComponentNameHere.test.ts
    - yourComponentNameHere.stories.tsx
    - README.md

## 📤 Module Federation Configuration for a New Component

If the component (ex: *yourComponentNameHere*) is intended to be of Organism (Atomic Design) or Feature level of value add to the user, you may want to add this as an exposed module within the *ModuleFederationPlugin* in the *webpack.config.js* file. This will enable runtime sharing of this component from one deployed application or CDN to a separate consuming application.

1. Open *webpack.config.js* file in your code editor
2. Under the *ModuleFederationPlugin* configuration object in the *Plugins* array, find the *exposes* object
3. Add a key/value pair where the key is akin to a route for the exposed module and the value is the file path to the module you want to expose.

    ```jsx
    //webpack.config.js

    // ...
    // Required assets from external sources for webpack configuration, plugins, etc
    // ...

    module.exports = {

    	// ...
    	// configuration for output, resolve, devServer, module, etc
    	// ...

      plugins: [
        new ModuleFederationPlugin({
          name: "RocketScience",
          filename: "remoteEntry.js",
          remotes: {},
          exposes: {
            "./NewComponentTemplate": "./src/components/NewComponentTemplate",
    				// =================================================================
    				// Key: similar to concept of a 'route' for your exposed module
    				// Value: file path to the module you want to expose
    				"./yourComponentNameHere": "./src/components/yourComponentNameHere"
    				// =================================================================
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        })
      ],
    };
    ```

# ❓ Help

- Contact me via email, listed in package.json