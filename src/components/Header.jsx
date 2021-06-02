import styled from "styled-components";
import Nav from "./Nav";

const HeaderContainer = styled.div`
  width: 100%;
  height: 80vh;
`;

const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const CentralTitle = styled.h1`
  font-size: 68px;
  color: #333a51;

  font-family: "Montserrat", sans-serif;
  letter-spacing: -0.1ch;
  line-height: 1px;
`;

const CentralSubTitle = styled.h2`
  font-size: 20px;
  color: #424b6c;

  font-style: italic;
  line-height: 10px;
`;

const Highlight = styled.span`
  color: #f13d3d;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <CentralContainer>
        <CentralTitle>
          👋 Hello there, I'm <Highlight>João Marco</Highlight>
        </CentralTitle>
        <CentralSubTitle>Front-end Developer </CentralSubTitle>
      </CentralContainer>
      <Nav />
    </HeaderContainer>
  );
};
