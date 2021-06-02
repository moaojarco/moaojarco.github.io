import styled from "styled-components";
import Nav from "../components/Nav";

const AboutContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  height: 89.8vh;
  background: linear-gradient(270deg, #fff, #ece9e6);

  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`;

const AboutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled.h1`
  font-size: 28px;
  color: #333a51;
  padding: 18px;
`;

const AboutPhoto = styled.img`
  width: 200px;
  clip-path: circle();
  border: 3px solid #f13d3d;
`;

const Sou = () => {
  return (
    <div>
      <AboutContainer>
        <AboutWrapper>
          <AboutTitle>About me 🧒</AboutTitle>
          <AboutPhoto src="./assets/jon.jpg" />
        </AboutWrapper>
        <Nav />
      </AboutContainer>
    </div>
  );
};

export default Sou;
