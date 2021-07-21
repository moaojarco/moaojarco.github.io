import styled from "styled-components";
import Nav from "../components/Nav";
import Card from "../components/Card";
import HomeButton from "../components/HomeButton";

const MyProjectContainer = styled.div`
  width: 100%;
`;

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
`;

const ProjectsWrapper = styled.div`
  max-width: 65rem;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Projects = () => {
  return (
    <MyProjectContainer>
      <Flex>
        <SectionTitle>My Projects 📂</SectionTitle>
        <HomeButton />
      </Flex>
      <ProjectsWrapper>
        <ProjectsContainer>
          <Card
            projectEmoji="🎨"
            projectName="Palette"
            projectGithub="https://github.com/moaojarco/palettes/"
            projectUrl="https://moaojarco.github.io/palettes/"
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
          <Card
            projectEmoji="📓"
            projectName="TodoList"
            projectGithub="https://github.com/moaojarco/todolist-fb"
            projectUrl="https://moaojarco.github.io/todolist-fb/"
            background="#ffb4b4"
            projectDesc="ToDo with Firebase database"
          />
          <Card
            projectEmoji="🎯"
            projectName="Valorant App"
            projectGithub="https://github.com/moaojarco/valorant-app"
            projectUrl="https://moaojarco.github.io/valorant-app/"
            background="#fa4454"
            projectDesc="App to display data about game Valorant"
          />
          <Card
            projectEmoji="🗺"
            projectName="Countries App"
            projectGithub="https://github.com/moaojarco/countries-app"
            projectUrl="https://moaojarco.github.io/countries-app/"
            background="#d3b944"
            projectDesc="App to display data about countries"
          />
        </ProjectsContainer>
        <Nav />
      </ProjectsWrapper>
    </MyProjectContainer>
  );
};

export default Projects;
