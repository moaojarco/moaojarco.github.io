import styled from "styled-components";
import { Link } from "react-router-dom";

const SimpleButton = styled(Link)`
  width: 40px;
  height: 40px;
  margin: 20px;
  padding: 5px;
  text-align: center;
  font-size: 1.5rem;

  border: 1px dotted #333a51;
`;

const HomeButton = () => {
  return <SimpleButton to="/">🏠</SimpleButton>;
};

export default HomeButton;
