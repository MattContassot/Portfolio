import React from 'react';
import { useState } from 'react';
import { BrowerScreen, BrowserButton, BrowserButtons, BrowserWindow, Container, ProjectTitle } from '../styles/ProjectCard';

function ProjectCard({ name, img, imgName, link}) {
  const [over, setOver] = useState(false);

  return (
    <Container
      onMouseEnter={ () => setOver(true) }
      onMouseLeave={ () => setOver(false) }
      over={ over }
    >
      <BrowserWindow className="janelaNavegador">
        <BrowserButtons className="botoes">
          <BrowserButton over={ over } color="red" />
          <BrowserButton over={ over } color="yellow" />
          <BrowserButton over={ over } color="green" />
        </BrowserButtons>
        <a href={ link } target="_blank" rel="noopener noreferrer">
          <BrowerScreen src={ img } alt={ imgName } />
        </a>
      </BrowserWindow>
      <ProjectTitle>{ name }</ProjectTitle>
    </Container>
  );
}

export default ProjectCard;