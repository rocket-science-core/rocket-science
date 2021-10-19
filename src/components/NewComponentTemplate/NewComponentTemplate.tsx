import React from 'react'
import styled from 'styled-components'
// import NewComponentTemplateWrapper from './NewComponentTemplate.styles'

interface NewComponentTemplateProps {
  /**
   * Button label text
   */
  text?: string
}

const NewComponentTemplateWrapper = styled.div`
  /* background-color: red;

    > .styled-button {
        background-color: blue;
    } */
`

const NewComponentTemplate = ({text}: NewComponentTemplateProps) => {
  return (
    <NewComponentTemplateWrapper>
      <button className="styled-button">
        {text ? text : 'no prop value provided'}
      </button>
    </NewComponentTemplateWrapper>
  )
}

// export const MemoizedNewComponentTemplate = React.memo(NewComponentTemplate);
// export { NewComponentTemplate };
export default NewComponentTemplate
