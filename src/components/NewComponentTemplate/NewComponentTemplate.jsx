import React from "react";
import styled from "styled-components";
import NewComponentTemplateWrapper from "./NewComponentTemplate.styles";

const NewComponentTemplate = ({ text }) => {
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
