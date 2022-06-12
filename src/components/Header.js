import React from 'react';
import { StyledHeader, StyledLink, Nav } from '../styles/Header';

function Header() {
  return (
    <StyledHeader>
      <StyledLink title="true" to="/">Matheus Contassot</StyledLink>
      <Nav>
        <StyledLink to="/about">Sobre</StyledLink>
        <StyledLink to="/projects">Projetos</StyledLink>
        <StyledLink to="/contact">Contato</StyledLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;