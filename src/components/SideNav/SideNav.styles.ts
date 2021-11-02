import styled from "styled-components";

const SideNavWrapper = styled.div`
  width: 34vw;
  height: 100vh;
  border-radius: 0 25px 25px 0;
  background-color: white;
  padding: 0 4vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: url("https://i.imgur.com/X5lNogv.png");
  background-repeat: no-repeat;
  background-size: 75%;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.2));

  .copy-text-wrapper {
    /* width: 26vw; */
  }

  .copy-text-heading {
    font-size: 0.85rem;
    line-height: 120%;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: rgba(0, 0, 0, 0.9);
  }

  .copy-text-divider {
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }

  .copy-text-body-wrapper {
    line-height: 125%;
    font-size: 0.75rem;
    font-weight: 550;
    color: rgba(0, 0, 0, 0.6);
  }

  .copy-text-body-point {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }

  .copy-text-body-point-icon {
    margin-right: 1rem;
  }

  .copy-text-body-point-text {
    margin: 0;
  }

  .copy-text-cta-wrapper {
    display: flex;
    flex-direction: row;
  }

  .copy-text-cta-button {
    text-decoration: none;
    margin-top: 4rem;
    background-color: #154b7d;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 1rem;
    padding: 0.66rem;
    border-radius: 30px;
  }

  .copy-text-cta-button-text {
    font-size: 0.8rem;
    margin-left: 1rem;
    font-weight: 550;
    color: rgba(255, 255, 255, 0.8);
  }

  .copy-text-cta-button-icon {
      height: 0.75rem;
  }
  
  .button-with-text {
    padding: 0.66rem 1rem;
  }

  .powered-by-technology {
    margin-right: 1rem;
  }

  .powered-by-heading {
    font-size: 0.85rem;
  }

  .powered-by-technology-icon {
      height: 30px;
  }

  .title-logo-background {
    position: relative;
  }
`;

export default SideNavWrapper;
