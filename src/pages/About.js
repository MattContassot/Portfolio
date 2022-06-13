import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PageContainer, ComponentContainer } from '../styles/GlobalStyle';

function About() {
  return (
    <PageContainer>
      <Header />
      <ComponentContainer>
        <h1>Colocar foto, escrever sobre mim e sobre com o que quero trabalhar</h1>
      </ComponentContainer>
      <Footer />
    </PageContainer>
  );
}

export default About;