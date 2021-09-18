var inquirer = require("inquirer");
const fs = require("fs");

const makeIndexFile = (name) => {
  const indexFile = `export { default } from './${name}';\nexport * from './${name}';`;
  fs.writeFile(
    `./src/components/${name}/index.ts`,
    indexFile,
    { flag: "w" },
    function (err) {
      if (err) return console.error(err);
    }
  );
};

const makeComponentFile = (name) => {
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
  `;

  fs.writeFile(
    `./src/components/${name}/${name}.tsx`,
    componentFile,
    { flag: "w" },
    function (err) {
      if (err) return console.error(err);
    }
  );
};

const makeStylesFile = (name) => {
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

export default ${name}Wrapper;`;

  fs.writeFile(
    `./src/components/${name}/${name}.styles.ts`,
    stylesFile,
    { flag: "w" },
    function (err) {
      if (err) return console.error(err);
    }
  );
};

const makeStoryFile = (name) => {
  const storyFile = `import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as marked from "marked";
const Readme = require("./README.md").default;

import NewComponentTemplate from "./NewComponentTemplate";

export default {
  title: "Examples/NewComponentTemplate",
  component: NewComponentTemplate,
  argTypes: {
    text: { control: "text" },
  },
} as ComponentMeta<typeof NewComponentTemplate>;

const Template: ComponentStory<typeof NewComponentTemplate> = (args) => (
  <NewComponentTemplate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: "Hello World",
};
Primary.parameters = {
  readme: {
    sidebar: marked(Readme),
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
};`;

  fs.writeFile(
    `./src/components/${name}/${name}.stories.tsx`,
    storyFile,
    { flag: "w" },
    function (err) {
      if (err) return console.error(err);
    }
  );
};

const makeTestsFile = (name) => {
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
});`;

fs.writeFile(
    `./src/components/${name}/${name}.test.tsx`,
    testsFile,
    { flag: "w" },
    function (err) {
      if (err) return console.error(err);
    }
  );
}

const makeReadmeFile = (name) => {
    const readmeFile = `# 📝 Summary

This is an example component intended to outline the expected code quality for a new component introduced to the code base.

# 💻 Usage

\`\`\`jsx
// Replace the file path with the correct filepath to NewComponentTemplate
import NewComponentTemplate from './filePathTo/NewComponentTemplate';

// Replace the string provided to text with your own
<NewComponentTemplate text='text content here' />
\`\`\`

# 📩 Button Props

| Name | Required | Type   | DefaultValue | Description  |
| ---- | -------- | ------ | ------------ | ------------ |
| text | ❌       | string | -            | button label |
    `;

    fs.writeFile(
        `./src/components/${name}/README.md`,
        readmeFile,
        { flag: "w" },
        function (err) {
          if (err) return console.error(err);
        }
      );
}

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "name",
      message: "What is the name of the component?",
      default: "MyComponent",
    },
  ])
  .then(({ name }) => {
    // Use user feedback for... whatever!!
    // console.log(answers);

    const dir = `./src/components/${name}`;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      makeIndexFile(name);
      makeComponentFile(name);
      makeStylesFile(name);
      makeStoryFile(name);
      makeTestsFile(name);
      makeReadmeFile(name);
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment

      console.log("nice try");
    } else {
      // Something else went wrong
      console.log("nice try");
    }
  });
