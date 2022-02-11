import pixelArt from './images/pixelArt.png';
import trybeWarts from './images/trybeWarts.png';
import shoppingCart from './images/shoppingCart.png';
import solarSystem from './images/solarSystem.png';

/*
  Passo a passo para incluir um novo projeto:
  - Importe a imagem do projeto,
  - Copie o primeiro objeto para o inicio do array,
  - Atualize as informações do objeto.
*/

const allProjects = [
  {
    name: 'Solar System',
    img: solarSystem,
    imgName: 'solarSystem',
    link: 'https://focused-wright-f4e7f9.netlify.app/',
  },
  {
    name: 'Shopping Cart',
    img: shoppingCart,
    imgName: 'shoppingCart',
    link: 'https://projetoscontassot.github.io/shoppingCart/',
  },
  {
    name: 'Trybewarts',
    img: trybeWarts,
    imgName: 'trybeWarts',
    link: 'https://projetoscontassot.github.io/trybewarts/',
  },
  {
    name: 'Pixel Art',
    img: pixelArt,
    imgName: 'pixelArt',
    link: 'https://projetoscontassot.github.io/pixelArt/',
  },
];

export default allProjects;