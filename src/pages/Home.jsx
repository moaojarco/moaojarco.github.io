import styled from "styled-components";
import Nav from "../components/Nav";

const HomeContainer = styled.div`
  width: 100%;
  height: 80vh;
`;

const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const CentralTitle = styled.h1`
  font-size: 5rem;
  color: #333a51;

  font-family: "Montserrat", sans-serif;
  letter-spacing: -0.1ch;
  line-height: 1px;

  @media (max-width: 800px) {
    max-width: 20rem;
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;

const CentralSubTitle = styled.h2`
  font-size: 1.25rem;
  color: #424b6c;

  font-style: italic;
  line-height: 0.625rem;
`;

const Highlight = styled.span`
  color: #f13d3d;
`;

const Home = () => {
  return (
    <HomeContainer>
      <CentralContainer>
        <CentralTitle>
          👋 Hello there, I'm <Highlight>João Marco</Highlight>
        </CentralTitle>
        <CentralSubTitle>Front-end Developer </CentralSubTitle>
      </CentralContainer>
      <Nav />
    </HomeContainer>
  );
};

export default Home;
