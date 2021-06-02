import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const NavWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NavTitle = styled.a`
  font-size: 1.75rem;
  color: #333a51;
  border-bottom: 4px dotted #333a51;

  text-decoration: none;
  font-weight: 800;

  &:hover {
    border-bottom: 4px dotted #f13d3d;
  }

  @media (max-width: 800px) {
    font-size: 18px;
    border-bottom: 2px dotted #333a51;

    &:hover {
      border-bottom: 2px dotted #f13d3d;
    }
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  margin-left: 0.625rem;

  @media (max-width: 800px) {
    margin-left: 1.5rem;
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavContent>
          <LinkStyled to="/">
            <NavTitle>🏠</NavTitle>
          </LinkStyled>

          <LinkStyled to="/about">
            <NavTitle>About me</NavTitle>
          </LinkStyled>
          <LinkStyled to="/projects">
            <NavTitle>My Projects</NavTitle>
          </LinkStyled>
          <LinkStyled to="/contact">
            <NavTitle>Contact</NavTitle>
          </LinkStyled>
        </NavContent>
      </NavWrapper>
    </NavContainer>
  );
};

export default Nav;
