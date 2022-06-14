import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectTable from '../components/ProjectTable';
import { PageContainer } from '../styles/GlobalStyle';

function Codes() {
  return (
    <PageContainer>
      <Header />
      <ProjectTable />
      <Footer />
    </PageContainer>
  );
}

export default Codes;