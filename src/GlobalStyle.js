import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => (props.whiteColor ? "white" : "black")};
    font-family: 'Space Mono', monospace;

    background: linear-gradient(270deg,#fff,#ece9e6);
}

a {
    text-decoration: none;
    color: #f13d3d;
}
`;

export default GlobalStyle;
