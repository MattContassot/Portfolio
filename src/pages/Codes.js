import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { folderIcon, arrowRightIcon, arrowUpIcon, arrowDownIcon } from '../helpers/icons';
import allProjects from '../helpers/projects';
import { PageContainer, ComponentContainer } from '../styles/GlobalStyle';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      olderSort: false,
      fillFolder: false,
    }
  }

  handleSort = () => {
    this.setState((prevState) => ({ olderSort: !prevState.olderSort }));
  }

  componentDidMount() {
    this.getParameters();
  }

  getParameters = () => {
    const windowSize = document.querySelector('.projectListWindow');
    const titleSize = 22;
    const itemsSize = (
      (document.querySelectorAll('.projectList').length * 25)
      + (document.querySelectorAll('.projectListOdd').length * 25)
    );
    const itemPar = itemsSize % 2 === 0 ? 0 : 1;
    const fillSize = (windowSize.clientHeight - itemsSize - titleSize - 20) / 25;
    const footerSize = (fillSize - Math.floor(fillSize)) * 25;

    this.setState({
      fillFolder: true,
      fillSize,
      itemPar,
      footerSize,
    });
  }
 
  fillFolder = () => {
    const { fillSize, itemPar } = this.state;
    const blankLines = [];

    for (let i = (itemPar); i <= Math.floor(fillSize); i += 1) {
      blankLines.push(
        <div
          key={ i }
          className={
            i % 2 === 0 ? "projectList" : "projectListOdd"
          }/>
      );      
    }

    return (blankLines);
  }

  render() {
    const { fillFolder, footerSize } = this.state;

    return (
      <PageContainer>
        <Header />
        <ComponentContainer id="mainProjects">
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
        </ComponentContainer>
        <Footer />
      </PageContainer>
    );
  }
}

export default Projects;