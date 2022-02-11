import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link id="nome" to="/">Matheus Contassot</Link>
        <nav>
          <Link to="/about">Sobre</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      </header>
    );
  }
}

export default Header;