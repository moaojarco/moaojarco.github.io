import styled from "styled-components";
import Nav from "../components/Nav";
import Card from "../components/Card";
import HomeButton from "../components/HomeButton";

const ProjectsContainer = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(3, 300px);

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const SectionTitle = styled.h1`
  font-size: 1.75rem;
  color: #333a51;
  padding: 1.125rem;
`;

const ProjectsWrapper = styled.div`
  max-width: 65rem;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Projects = () => {
  return (
    <div>
      <ProjectsWrapper>
        <HeaderSection>
          <SectionTitle>My Projects 📂</SectionTitle>
          <HomeButton />
        </HeaderSection>
        <ProjectsContainer>
          <Card
            projectEmoji="🎨"
            projectName="Palette"
            projectGithub="https://github.com/moaojarco/colors-palette"
            projectUrl="http://moaojarco.github.io/colors-palette"
            background="#ffe5b4"
            projectDesc="Simple app to generate random palettes for you"
          />
          <Card
            projectEmoji="🔫"
            projectName="CSGO Crosshairs"
            projectGithub="https://github.com/moaojarco/crosspro"
            projectUrl="http://crosspro.vercel.app/"
            background="#aaffa2"
            projectDesc="See the settings of professional players from CSGO"
          />
          <Card
            projectEmoji="🧒"
            projectName="Portfolio"
            projectGithub="https://github.com/moaojarco/moaojarco.github.io"
            projectUrl="http://moaojarco.github.io/"
            background="#b4d4ff"
            projectDesc="You are looking for him! project to present me and my projects"
          />
        </ProjectsContainer>
        <Nav />
      </ProjectsWrapper>
    </div>
  );
};

export default Projects;
