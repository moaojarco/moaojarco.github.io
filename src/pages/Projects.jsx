import styled from "styled-components";
import Nav from "../components/Nav";

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
  max-width: 61.25;
  margin: 0.625rem auto;
`;

const ProjectCard = styled.div`
  background: #f13d3d;
  height: 15rem;
`;

const Projects = () => {
  return (
    <div>
      <ProjectsWrapper>
        <SectionTitle>My Projects 📂</SectionTitle>
        <ProjectsContainer>
          <ProjectCard>kk</ProjectCard>
          <ProjectCard>kk</ProjectCard>
          <ProjectCard>kk</ProjectCard>
        </ProjectsContainer>
      </ProjectsWrapper>
      <Nav />
    </div>
  );
};

export default Projects;
