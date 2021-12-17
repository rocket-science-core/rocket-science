import React from "react";
import MyComponentWrapper from "./MyComponent.styles";

const MyComponent  = ({ text }) => {
  return (
    <MyComponentWrapper>
      <button className="styled-button">
        {text ? text : "no prop value provided"}
      </button>
    </MyComponentWrapper>
  );
};

// export const MemoizedMyComponent = React.memo(MyComponent);
// export { MyComponent };
export default MyComponent;
  