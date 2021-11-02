import React from "react";
import SideNavWrapper from "./SideNav.styles";

interface SideNavProps {
  /**
   * Button label text
   */
  // text?: string;
}

const CopyTextHeading =
  "Lowering the barrier to entry for creating or contributing to a modern frontend project.";

const CopyTextBodyPoints = [
  {
    icon: "https://i.imgur.com/PjP0vJD.png",
    iconAltText: "Module Federation Icon",
    text:
      "Webpack 5's Module Federation made easy! Create a new federated module with our CLI tool",
  },
  {
    icon: "https://i.imgur.com/o3tqvL1.png",
    iconAltText: "Micro Frontend Icon",
    text: "Build and preview Micro Frontends with ease using Storybook",
  },
  {
    icon: "https://i.imgur.com/SogLo1Y.png",
    iconAltText: "Isolated Environment Icon",
    text:
      "Develop, document, style and test your UI components in an isolated environment",
  },
];

const CTAButtonsContent = [
  {
    icon: "https://i.imgur.com/XQ4L8Mu.png",
    iconAltText: "Documentation Icon",
    text: "Getting Started",
    link: "#",
  },
  {
    icon: "https://i.imgur.com/7TUgC5p.png",
    iconAltText: "Github Icon",
    link: "#",
  },
  {
    icon: "https://i.imgur.com/JKYGLOz.png",
    iconAltText: "Twitter Icon",
    link: "#",
  },
];

const PoweredByContent = [
  {
    icon: "https://i.imgur.com/aBTq2sw.png",
    iconAltText: "React Icon",
    link: "#",
  },
  {
    icon: "https://i.imgur.com/qGzmE2Q.png",
    iconAltText: "Webpack Icon",
    link: "#",
  },
  {
    icon: "https://i.imgur.com/Oq41jNp.png",
    iconAltText: "Storybook Icon",
    link: "#",
  },
  {
    icon: "https://i.imgur.com/0XDP6HN.png",
    iconAltText: "Jest Icon",
    link: "#",
  },
  {
    icon: "https://i.imgur.com/Yuyhvlf.png",
    iconAltText: "Styled Components Icon",
    link: "#",
  },
  {
    icon: "https://i.imgur.com/H56zNCQ.png",
    iconAltText: "TypeScript Icon",
    link: "#",
  },
];

const SideNav = ({}: SideNavProps) => {
  return (
    <SideNavWrapper>
      {/* TITLE / LOGO */}
      <div className="title-logo-wrapper">
        <img
          className="title-logo"
          src="https://i.imgur.com/OaVJFgY.png"
          alt="Logo"
        />
      </div>

      {/* COPY TEXT */}
      <div className="copy-text-wrapper">
        <h1 className="copy-text-heading">{CopyTextHeading}</h1>
        <div className="copy-text-divider" />
        <div className="copy-text-body-wrapper">
          {CopyTextBodyPoints.map((point, index) => {
            return (
              <div className="copy-text-body-point" key={index}>
                <img
                  className="copy-text-body-point-icon"
                  src={point.icon}
                  alt={point.iconAltText}
                />
                <p className="copy-text-body-point-text">{point.text}</p>
              </div>
            );
          })}
        </div>

        {/* CALLS TO ACTION */}
        <div className="copy-text-cta-wrapper">
          {CTAButtonsContent.map((button, index) => {
            return (
              <a
                href={button.link}
                className={`copy-text-cta-button ${
                  button.text && "button-with-text"
                }`}
                key={index}
              >
                <img
                  className="copy-text-cta-button-icon"
                  src={button.icon}
                  alt={button.iconAltText}
                />
                {button.text && (
                  <span className="copy-text-cta-button-text">{button.text}</span>
                )}
              </a>
            );
          })}
        </div>
      </div>

      
      <div className="powered-by-wrapper">
        <h3 className="powered-by-heading">Powered by</h3>
        <div className="powered-by-technologies">
          {PoweredByContent.map((technology, index) => {
            return (
              <a
                href={technology.link}
                className="powered-by-technology"
                key={index}
              >
                <img
                  className="powered-by-technology-icon"
                  src={technology.icon}
                  alt={technology.iconAltText}
                />
              </a>
            );
          })}
        </div>
      </div>
    </SideNavWrapper>
  );
};

// export const MemoizedSideNav = React.memo(SideNav);
// export { SideNav };
export default SideNav;
