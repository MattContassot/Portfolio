import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PageContainer, ComponentContainer } from '../styles/GlobalStyle';

function Contact() {
  return (
    <PageContainer>
      <Header />
      <ComponentContainer>
        <h1>Em breve: formulário para contato que envia o email automaticamente</h1>
      </ComponentContainer>
      <Footer />
    </PageContainer>
  );
}

export default Contact;