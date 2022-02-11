import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <h1>Janela com lista dos projetos e seus links do github</h1>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Projects;