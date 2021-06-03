import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  @media (max-width: 800px) {
    width: 20rem;
    margin: 0 auto;
  }
`;

const CardTitle = styled.div`
  font-size: 1.75rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin: 10px 20px;
  color: #333a51;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  padding: 1rem;
  color: #333a51;
`;

const CardEmoji = styled.span`
  font-size: 3rem;
`;

const CardLink = styled.a`
  text-decoration: none;
  border: 1px dotted #504e4e;
  padding: 10px;
  margin-bottom: 10px;
  transition: all 500ms ease;
  border-radius: 8px;

  &:hover {
    background: #f13d3d;
    color: #fff;
  }
`;

const CardTop = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
`;

const CardBottom = styled.div`
  background: #f7f7f7;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Card = ({
  projectName,
  projectDesc,
  projectUrl,
  projectGithub,
  projectEmoji,
  background,
}) => {
  return (
    <CardContainer style={{ backgroundColor: background }}>
      <CardTop>
        <CardEmoji>{projectEmoji}</CardEmoji>
      </CardTop>
      <CardBottom>
        <CardTitle>{projectName}</CardTitle>
        <CardDesc>{projectDesc}</CardDesc>
        <Flex>
          <CardLink target="_blank" href={projectUrl}>
            Preview
          </CardLink>
          <CardLink target="_blank" href={projectGithub}>
            Source
          </CardLink>
        </Flex>
      </CardBottom>
    </CardContainer>
  );
};

export default Card;
