import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <h1>Em breve: formulário para contato que envia o email automaticamente</h1>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Contact;