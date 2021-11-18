const projetos = document.querySelectorAll('.janelaNavegador');
const linkedIn = document.getElementById('linkedIn');
const gitHub = document.getElementById('gitHub');

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

function linkedInSelecionado() {
  linkedIn.classList.add('linkedInSelecionado');
}

function linkedInDesselecionado() {
  linkedIn.classList.remove('linkedInSelecionado');
}

function gitHubSelecionado() {
  gitHub.classList.add('gitHubSelecionado');
}

function gitHubDesselecionado() {
  gitHub.classList.remove('gitHubSelecionado');
}

window.onload = () => {
  observaProjetos();
  linkedIn.addEventListener('mouseenter', linkedInSelecionado);
  linkedIn.addEventListener('mouseleave', linkedInDesselecionado);
  gitHub.addEventListener('mouseenter', gitHubSelecionado);
  gitHub.addEventListener('mouseleave', gitHubDesselecionado);
}