import styled from "styled-components";
import Nav from "../components/Nav";
import HomeButton from "../components/HomeButton";

const AboutContainer = styled.div`
  width: 100%;
  height: 89.8vh;
  background: linear-gradient(270deg, #fff, #ece9e6);

  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`;

const AboutWrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`;

const AboutTitle = styled.h1`
  font-size: 1.75rem;
  color: #333a51;
  padding: 1.125rem;

  @media (max-width: 800px) {
    text-align: center;
    padding: 0;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 5em;
    margin: 0;
  }
`;

const ProfilePhoto = styled.img`
  width: 100%;
  height: 0.875;
  max-width: 18.75rem;
  border: 3px dotted #f13d3d;
  margin-right: 3rem;

  @media (max-width: 800px) {
    width: 70%;
  }
`;

const ProfileTitle = styled.h1`
  font-size: 1.8rem;
  color: #333a51;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
`;

const ProfileText = styled.p`
  font-size: 0.875rem;
  line-height: 1.375rem;
`;

const Sou = () => {
  return (
    <div>
      <AboutContainer>
        <HomeButton />
        <AboutWrapper>
          <AboutTitle>About me 🧒</AboutTitle>
          <ProfileContainer>
            <ProfilePhoto src="../assets/jon.jpg" />
            <div>
              <ProfileTitle>
                I'm a Frontend developer, terrible designer and Music Lover
              </ProfileTitle>
              <ProfileText>
                I've been in love with development since my firsts experiments
                with it. I'm very passionate and enthusiastic about using
                technology to solve my life's problems and ambitions, and not to
                mention, I really like a good cup of cafe ☕ while listening to
                some playlist 🎵.
              </ProfileText>
              <ProfileText>
                My favorite technologies right now are: React.js, MySQL,
                Node.js, and Styled Components 💅.
              </ProfileText>
            </div>
          </ProfileContainer>
        </AboutWrapper>
        <Nav />
      </AboutContainer>
    </div>
  );
};

export default Sou;
