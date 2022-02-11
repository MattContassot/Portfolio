import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <h1>Colocar foto, escrever sobre mim e sobre com o que quero trabalhar</h1>
        </main>
        <Footer />
      </div>
    );
  }
}

export default About;