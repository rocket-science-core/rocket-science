import React from "react";
import SomeExampleWrapper from "./SomeExample.styles";

interface SomeExampleProps {
  /**
   * Button label text
   */
  text?: string;
}

const SomeExample  = ({ text }: SomeExampleProps) => {
  return (
    <SomeExampleWrapper>
      <button className="styled-button">
        {text ? text : "no prop value provided"}
      </button>
    </SomeExampleWrapper>
  );
};

// export const MemoizedSomeExample = React.memo(SomeExample);
// export { SomeExample };
export default SomeExample;
  