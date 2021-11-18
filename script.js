const projetos = document.querySelectorAll('.janelaNavegador');

function selecionaProjeto(evento) {
  evento.target.id = 'projetoSelecionado';
}

function desselecionaProjeto(evento) {
  evento.target.removeAttribute('id');
}

function observaProjetos() {
  for (let i = 0; i < projetos.length; i += 1) {
    projetos[i].addEventListener('mouseenter', selecionaProjeto);
    projetos[i].addEventListener('mouseleave', desselecionaProjeto);
  }
}

window.onload = observaProjetos;