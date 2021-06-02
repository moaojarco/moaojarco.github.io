import styled from "styled-components";
import Nav from "../components/Nav";

const ProjectsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 100px;
`;

const SectionTitle = styled.h1`
  font-size: 28px;
  color: #333a51;
  padding: 18px;
`;

const ProjectsWrapper = styled.div`
  max-width: 980px;
  margin: 10px auto;
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
