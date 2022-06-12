import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import allProjects from '../services/projects';
import { PageContainer, ComponentContainer } from '../styles/GlobalStyle';

class Home extends React.Component {
  render() {
    return (
      <PageContainer>
        <Header />
        <ComponentContainer>
          <p>Teste</p>
          {/* {
            allProjects.map((projeto, index) => {
              const { name, img, imgName, link } = projeto;
              return (
                <ProjectCard
                  key={ index }
                  name={ name }
                  img={ img }
                  imgName={ imgName }
                  link={ link }
                />
              );
            })
          } */}
        </ComponentContainer>
        <Footer />
      </PageContainer>
    );
  }
}

export default Home;