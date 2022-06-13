import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { arrowDownIcon, arrowUpIcon } from '../helpers/icons';
import allProjects from '../helpers/projects';
import { BrowerScreen, BrowserButton, BrowserButtons, BrowserWindow, Container, ProjectTitle } from '../styles/ProjectCard';

function ProjectCard({ name, img, imgName, link}) {
  const [over, setOver] = useState(false);

  return (
    <div className="projetoPR">
      <div className="janelaNavegadorPR">
        <div className="botoesPR">
          <Link className="botaoPR botaoVermelho" to="/" />
          <div className="botaoPR botaoAmarelo"></div>
          <div className="botaoPR botaoVerde"></div>
          <h1>Repositório dos projetos no GitHub</h1>
        </div>
        <div className="projectListWindow">
          <div className="projectListTitles">
            <p id="projectName">Nome</p>
            <div id="lineBetweenTitle" />
            <p onClick={ this.handleSort }>Data de criação &nbsp;</p>
            { this.state.olderSort ? arrowUpIcon() : arrowDownIcon() }
          </div>
          <div id="lineUnderTitle" />
          {
            allProjects.sort((a, b) => {
              const { olderSort } = this.state;

              if (olderSort) return -1;
              else return 1;
            }).map(({ name, date, linkRepo }, index) => (
              <a
                key={ index }
                className={ index % 2 === 0 ? "projectList" : "projectListOdd" }
                href={ linkRepo }
                target="_blank"
                rel="noopener noreferrer"
              >
                { arrowRightIcon() }&nbsp;&nbsp;{ folderIcon() }&nbsp;
                <p className="projectNameList">{ name }</p>
                <p className="projectDateList">{ date }</p>
              </a>
            ))
          }
          {
            fillFolder && this.fillFolder()
          }
          <p
            id="footerList"
            style={{ height: `${20 + footerSize}px` }}
          >
            { allProjects.length }&nbsp;
            itens
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;