import React from "react";
import LandingPageWrapper from "./LandingPage.styles";

import SideNav from "../SideNav/";

interface LandingPageProps {
  /**
   * Button label text
   */
  // text?: string;
}

const LandingPage  = ({  }: LandingPageProps) => {
  return (
    <LandingPageWrapper>
      <SideNav />
    </LandingPageWrapper>
  );
};

// export const MemoizedLandingPage = React.memo(LandingPage);
// export { LandingPage };
export default LandingPage;
  