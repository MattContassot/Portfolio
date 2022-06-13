import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import allProjects from '../services/projects';
import { PageContainer, ComponentContainer } from '../styles/GlobalStyle';

function Home() {
  return (
    <PageContainer>
      <Header />
      <ComponentContainer direction="row">
        { allProjects.map(({ name, img, imgName, link }, index) => {
          return (
            <ProjectCard
              key={ index }
              name={ name }
              img={ img }
              imgName={ imgName }
              link={ link }
            />);
          })}
      </ComponentContainer>
      <Footer />
    </PageContainer>
  );
}

export default Home;