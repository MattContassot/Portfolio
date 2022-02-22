import React from 'react';

class ProjectCard extends React.Component {
  constructor() {
    super();

    this.handleMouse = this.handleMouse.bind(this);
  }

  handleMouse({ type, currentTarget }) {
    const botoes = currentTarget.querySelectorAll('.botao');
    if (type === 'mouseenter') return (
      currentTarget.id = 'projetoSelecionado',
      botoes[0].classList.add('botaoVermelho'),
      botoes[1].classList.add('botaoAmarelo'),
      botoes[2].classList.add('botaoVerde')
    );
    currentTarget.removeAttribute('id');
    botoes.forEach((botao) => botao.className = 'botao');
  }

  render() {
    const { name, img, imgName, link} = this.props;

    return (
      <div className="projeto" onMouseEnter={ this.handleMouse } onMouseLeave={ this.handleMouse }>
        <div className="janelaNavegador">
          <div className="botoes">
            <div className="botao"></div>
            <div className="botao"></div>
            <div className="botao"></div>
          </div>
          <a href={ link } target="_blank" rel="noreferrer">
            <img src={ img } alt={ imgName } />
          </a>
        </div>
        <p>{name}</p>
      </div>
    );
  }
}

export default ProjectCard;