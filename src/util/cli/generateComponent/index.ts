var inquirer = require('inquirer')
const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname, '/src/')

const webpackConfig = require('../../../../webpack.config.js')

const makeIndexFile = name => {
  const indexFile = `export { default } from './${name}';\nexport * from './${name}';`
  fs.writeFile(
    `./src/components/${name}/index.ts`,
    indexFile,
    {flag: 'w'},
    function (err) {
      if (err) return console.error(err)
    },
  )
}

const makeComponentFile = name => {
  const componentFile = `import React from "react";
import ${name}Wrapper from "./${name}.styles";

interface ${name}Props {
  /**
   * Button label text
   */
  text?: string;
}

const ${name}  = ({ text }: ${name}Props) => {
  return (
    <${name}Wrapper>
      <button className="styled-button">
        {text ? text : "no prop value provided"}
      </button>
    </${name}Wrapper>
  );
};

// export const Memoized${name} = React.memo(${name});
// export { ${name} };
export default ${name};
  `

  fs.writeFile(
    `./src/components/${name}/${name}.tsx`,
    componentFile,
    {flag: 'w'},
    function (err) {
      if (err) return console.error(err)
    },
  )
}

const makeStylesFile = name => {
  const stylesFile =
    `import styled from 'styled-components';

const ${name}Wrapper = styled.div\`` +
    `
    /* background-color: red;

    > .styled-button {
        background-color: blue;
    } */
\`` +
    `

export default ${name}Wrapper;`

  fs.writeFile(
    `./src/components/${name}/${name}.styles.ts`,
    stylesFile,
    {flag: 'w'},
    function (err) {
      if (err) return console.error(err)
    },
  )
}

const makeDefaultStoryFile = name => {
  const storyFile = `import React from "react";
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  const Readme = require("../README.md").default;
  
  import ${name} from "../${name}";
  
  export default {
    title: "Examples/${name}/Default",
    component: ${name},
    argTypes: {
      text: { control: "text" },
    },
  } as ComponentMeta<typeof ${name}>;
  
  // ==============================
  // Traditional Node Render on Client Side
  // ==============================
  
  const Template: ComponentStory<typeof ${name}> = (args) => (
    <${name} {...args} />
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
  };`

  fs.writeFile(
    `./src/components/${name}/stories/${name}.stories.tsx`,
    storyFile,
    {flag: 'w'},
    function (err) {
      if (err) return console.error(err)
    },
  )
}

const makeFederatedStoryFile = name => {
  const storyFile = `import React from "react";
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  import DynamicRemoteContainer from "../../../util/hooks/DynamicRemoteContainer";
  const Readme = require("../README.md").default;
  
  export default {
    title: "Examples/${name}/Federated",
    component: DynamicRemoteContainer,
  } as ComponentMeta<typeof DynamicRemoteContainer>;
  
  // ==============================
  // Module Federation MFE Render on Client Side
  //
  // Notes:
  // - This is a special case where we are using the DynamicRemoteContainer
  // - This is a special case where we are not following the steps below
  //   because this default component is already configured in the
  //   ModuleFederationComponent
  //
  // Directions:
  // 1. Make Sure you add the component to the "exposes"
  //    in webpack.config.js ModuleFederationPlugin
  //
  // 2. Uncomment the code below
  //
  // 3. Run $ yarn story
  //
  // ==============================
  
  // const ModFedTemplate: ComponentStory<typeof DynamicRemoteContainer> = ({
  //   url,
  //   scope,
  //   module: targetModule,
  //   componentProps,
  // }) => (
  //   <DynamicRemoteContainer
  //     url={url}
  //     scope={scope}
  //     module={targetModule}
  //     componentProps={componentProps}
  //   />
  // );
  
  // export const ModFedPrimary = ModFedTemplate.bind({});
  // ModFedPrimary.args = {
  //   componentProps: {
  //     text: "Hello World",
  //   },
  //   url: "http://localhost:3001/remoteEntry.js",
  //   scope: "RocketScience",
  //   module: "./${name}",
  // };
  // ModFedPrimary.parameters = {
  //   readme: {
  //     sidebar: Readme,
  //   },
  // };
  
  // export const ModFedSecondary = ModFedTemplate.bind({});
  // ModFedSecondary.args = {
  //   componentProps: {
  //     text: "",
  //   },
  //   url: "http://localhost:3001/remoteEntry.js",
  //   scope: "RocketScience",
  //   module: "./${name}",
  // };
  // ModFedSecondary.parameters = {
  //   readme: {
  //     sidebar: Readme,
  //   },
  // };`

  fs.writeFile(
    `./src/components/${name}/stories/${name}Fed.stories.tsx`,
    storyFile,
    {flag: 'w'},
    function (err) {
      if (err) return console.error(err)
    },
  )
}

const makeTestsFile = name => {
  const testsFile = `import React from "react";
import { render } from "@testing-library/react";
import ${name} from "./${name}";

it("${name} renders text prop", () => {
    const { getByText } = render(
    <${name} text={"Hello World from test"} />
    );
    expect(getByText("Hello World from test")).toBeTruthy();
});

it("${name} renders with no prop value provided", () => {
    const { getByText } = render(<${name} text={""} />);
    expect(getByText("no prop value provided")).toBeTruthy();
});`

  fs.writeFile(
    `./src/components/${name}/${name}.test.tsx`,
    testsFile,
    {flag: 'w'},
    function (err) {
      if (err) return console.error(err)
    },
  )
}

const makeReadmeFile = name => {
  const readmeFile = `# 📝 Summary

This is an example component intended to outline the expected code quality for a new component introduced to the code base.

# 💻 Usage

\`\`\`jsx
// Replace the file path with the correct filepath to ${name}
import ${name} from './filePathTo/${name}';

// Replace the string provided to text with your own
<${name} text='text content here' />
\`\`\`

# 📩 Button Props

| Name | Required | Type   | DefaultValue | Description  |
| ---- | -------- | ------ | ------------ | ------------ |
| text | ❌       | string | -            | button label |
    `

  fs.writeFile(
    `./src/components/${name}/README.md`,
    readmeFile,
    {flag: 'w'},
    function (err) {
      if (err) return console.error(err)
    },
  )
}

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?',
      default: 'MyComponent',
    },
    {
      type: 'list',
      name: 'componentType',
      choices: ['Federated Organism', 'Feature Level Component'],
      message: 'Is this a federated organism or a feature level component?',
    },
  ])
  .then(answers => {
    const {name, componentType} = answers
    // Use user feedback for... whatever!!
    // console.log(answers);

    const dir = `./src/components/${name}`
    const storiesDir = dir + `/stories`

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {recursive: true})
      makeIndexFile(name)
      makeComponentFile(name)
      makeStylesFile(name)
      makeTestsFile(name)
      makeReadmeFile(name)
    }
    if (!fs.existsSync(storiesDir)) {
      fs.mkdirSync(storiesDir, {recursive: false})
      makeDefaultStoryFile(name)
      if (componentType === 'Federated Organism') {
        makeFederatedStoryFile(name)
      }
    }
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment

      console.log('nice try')
    } else {
      // Something else went wrong
      console.log('nice try')
    }
  })
