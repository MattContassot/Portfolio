import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PageContainer, ComponentContainer } from '../styles/GlobalStyle';

function Contact() {
  return (
    <PageContainer>
      <Header />
      <ComponentContainer>
        <h1>Implementar formulário para contato que envia o e-mail automaticamente</h1>
      </ComponentContainer>
      <Footer />
    </PageContainer>
  );
}

export default Contact;