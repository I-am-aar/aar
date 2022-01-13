import React from "react"
import { Link } from "gatsby";
import Styled from 'styled-components';

const HeaderWrapper = Styled.header`
  height: 80px;
  width: 100%;
  padding: 0 10%;
  position: fixed;
  z-index: 12;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    & span {
      display: none;
    }
  }
`;

const Title = Styled.p`
  font-size: 18px;
`;

const StyledLink = Styled(Link)`
  margin-bottom: 10px;

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Nav = Styled.div`
  text-align: right;
  margin-top: 20px;
  display: flex;
  flex-flow: column;
`;

const Header = () => (
  <HeaderWrapper>
    <Title>
      <Link to="/">
        Arnór <span>Ragnarsson</span>
      </Link>
    </Title>
    <p>&lt;<span>WEB DEVELOPER</span>&gt;</p>
    <Nav>
      <StyledLink to="/playground" >Playground</StyledLink>
      <StyledLink to="/stories" >Stories</StyledLink>
      <StyledLink to="/about" >About</StyledLink>
    </Nav>
  </HeaderWrapper>
)

export default Header
