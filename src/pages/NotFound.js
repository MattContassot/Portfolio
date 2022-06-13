import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ComponentContainer, PageContainer } from '../styles/GlobalStyle';
import { Container, Gif, Text } from '../styles/NotFound';
import coffee from '../helpers/images/not_found.gif';

class NotFound extends React.Component {
  render() {
    return (
      <PageContainer>
        <Header />
        <ComponentContainer>
          <Container>
            <Gif src={ coffee } alt="Xícara de Café" />
            <Text>Página não encontrada</Text>
          </Container>
        </ComponentContainer>
        <Footer />
      </PageContainer>
    );
  }
}

export default NotFound;