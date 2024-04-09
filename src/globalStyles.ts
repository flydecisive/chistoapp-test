import { createGlobalStyle } from "styled-components";
import InterMedium from "./assets/fonts/Inter-Medium.ttf";
import InterRegular from "./assets/fonts/Inter-Regular.ttf";
import InterSemiBold from "./assets/fonts/Inter-SemiBold.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    font-weight: "normal";
    font-style: "normal";
    font-display: "swap";
    src: url(${InterMedium}) format('truetype');
  }

  @font-face {
    font-family: "Inter";
    font-weight: "normal";
    font-style: "normal";
    font-display: "swap";
    src: url(${InterRegular}) format('truetype');
  }

  @font-face {
    font-family: "Inter";
    font-weight: "normal";
    font-style: "normal";
    font-display: "swap";
    src: url(${InterSemiBold}) format('truetype');
  }
    
  * {
    margin: 0;
    padding: 0;
    font-family: "Inter";
  }
`;

export default GlobalStyle;
