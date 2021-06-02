import styled from "styled-components";
import Nav from "../components/Nav";
import Card from "../components/Card";

const ProjectsContainer = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 6.25rem;
`;

const SectionTitle = styled.h1`
  font-size: 1.75rem;
  color: #333a51;
  padding: 1.125rem;
`;

const ProjectsWrapper = styled.div`
  max-width: 61.25rem;
  margin: 0.625rem auto;
`;

const Projects = () => {
  return (
    <div>
      <ProjectsWrapper>
        <SectionTitle>My Projects 📂</SectionTitle>
        <ProjectsContainer>
          <Card
            projectEmoji="🎨"
            projectName="Palette"
            projectLink="#"
            background="#919191"
          />
          <Card
            projectEmoji="🔫"
            projectName="CSGO Crosshairs"
            projectLink="#"
            background="#919191"
          />
          <Card
            projectEmoji="🧒"
            projectName="Portfolio"
            projectLink="#"
            background="#919191"
          />
        </ProjectsContainer>
      </ProjectsWrapper>
      <Nav />
    </div>
  );
};

export default Projects;
