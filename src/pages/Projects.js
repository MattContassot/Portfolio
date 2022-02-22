import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { folderIcon, arrowRightIcon, arrowUpIcon, arrowDownIcon } from '../services/icons';
import allProjects from '../services/projects';
import '../styles/Projects.css';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = { olderSort: false }
  }

  handleSort = () => {
    this.setState((prevState) => ({ olderSort: !prevState.olderSort }));
  }

  render() {
    return (
      <div>
        <Header />
        <main id="mainProjects">
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
                  <p onClick={ this.handleSort }>Data de criação &nbsp;</p>
                  { this.state.olderSort ? arrowUpIcon() : arrowDownIcon() }
                </div>
                {
                  allProjects.sort((a, b) => {
                    const { olderSort } = this.state;

                    if (olderSort) return -1;
                    else return 1;
                  }).map(({ name, date, linkRepo }, index) => (
                    <a
                      className={ index % 2 === 0 ? "projectList" : "projectListOdd" }
                      href={ linkRepo }
                      target="_blank"
                    >
                      { arrowRightIcon() }&nbsp;&nbsp;{ folderIcon() }&nbsp;
                      <p class="projectNameList">{ name }</p>
                      <p class="projectDateList">{ date }</p>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Projects;