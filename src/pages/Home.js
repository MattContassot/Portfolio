import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import allProjects from '../services/projects';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          {
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
          }
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;