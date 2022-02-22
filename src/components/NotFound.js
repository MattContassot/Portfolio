import React from 'react';
import Header from './Header';
import '../styles/App.css';
import Footer from './Footer';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <h1>404 - Página não encontrada</h1>
        </main>
        <Footer />
      </div>
    );
  }
}

export default NotFound;