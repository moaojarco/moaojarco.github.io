import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  background: #f86363;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.div`
  font-size: 2rem;
  color: #333a51;
`;

const CardEmoji = styled.span`
  font-size: 3rem;
`;

const CardLink = styled.a`
  text-decoration: none;
`;

const CardTop = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
`;

const CardBottom = styled.div`
  background: #c2c2c2;
  height: 10rem;
  width: 100%;
`;

const Card = ({ projectName, projectLink, projectEmoji, background }) => {
  return (
    <CardContainer style={{ backgroundColor: background }}>
      <CardTop>
        <CardEmoji>{projectEmoji}</CardEmoji>
      </CardTop>
      <CardBottom>
        <CardTitle>{projectName}</CardTitle>
        <CardLink href={projectLink}>{projectName}</CardLink>
      </CardBottom>
    </CardContainer>
  );
};

export default Card;
