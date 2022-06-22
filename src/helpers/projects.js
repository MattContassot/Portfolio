import pixelArt from './images/pixelArt.png';
import trybeWarts from './images/trybeWarts.png';
import shoppingCart from './images/shoppingCart.png';
import solarSystem from './images/solarSystem.png';
import portfolio from './images/portfolio.png';

/*
  Passo a passo para incluir um novo projeto:
  - Importe a imagem do projeto,
  - Copie o primeiro objeto para o inicio do array,
  - Atualize as informações do objeto.
*/

const allProjects = [
  {
    index: 4,
    name: 'Portfólio',
    img: portfolio,
    imgName: 'portfolio',
    link: 'https://matheuscontassot.netlify.app/',
    linkRepo: 'https://github.com/MattContassot/Portfolio',
    date: '07 de mar de 2022',
  },
  {
    index: 3,
    name: 'Solar System',
    img: solarSystem,
    imgName: 'solarSystem',
    link: 'https://focused-wright-f4e7f9.netlify.app/',
    linkRepo: 'https://github.com/projetosContassot/solarSystem',
    date: '03 de jan de 2022',
  },
  {
    index: 2,
    name: 'Shopping Cart',
    img: shoppingCart,
    imgName: 'shoppingCart',
    link: 'https://projetoscontassot.github.io/shoppingCart/',
    linkRepo: 'https://github.com/projetosContassot/shoppingCart',
    date: '02 de dez de 2021',
  },
  {
    index: 1,
    name: 'Trybewarts',
    img: trybeWarts,
    imgName: 'trybeWarts',
    link: 'https://projetoscontassot.github.io/trybewarts/',
    linkRepo: 'https://github.com/projetosContassot/trybewarts',
    date: '10 de nov de 2021',
  },
  {
    index: 0,
    name: 'Pixel Art',
    img: pixelArt,
    imgName: 'pixelArt',
    link: 'https://projetoscontassot.github.io/pixelArt/',
    linkRepo: 'https://github.com/projetosContassot/pixelArt',
    date: '25 de out de 2021',
  },
];

export default allProjects;