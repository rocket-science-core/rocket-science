import React from "react";
import NewComponentTemplateWrapper from "./NewComponentTemplate.styles";

interface NewComponentTemplateProps {
  /**
   * Button label text
   */
  text?: string;
}

const NewComponentTemplate = ({ text }: NewComponentTemplateProps) => {
  return (
    <NewComponentTemplateWrapper>
      <button className="styled-button">
        {text ? text : "no prop value provided"}
      </button>
    </NewComponentTemplateWrapper>
  );
};

// export const MemoizedNewComponentTemplate = React.memo(NewComponentTemplate);
// export { NewComponentTemplate };
export default NewComponentTemplate;
