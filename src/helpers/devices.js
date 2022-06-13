const size = {
  motoG: '360px',
  iPhone: '414px',
  tablet: '768px',
  squareDisplay: '1280px',
  notebook: '1366px',
  widescreen: '1600px',
  fullHd: '1920px',
}

const device = {
  motoG: `(min-width: ${size.motoG})`,
  iPhone: `(min-width: ${size.iPhone})`,
  tablet: `(min-width: ${size.tablet})`,
  squareDisplay: `(min-width: ${size.squareDisplay})`,
  notebook: `(min-width: ${size.notebook})`,
  widescreen: `(min-width: ${size.widescreen})`,
  fullHd: `(min-width: ${size.fullHd})`
};

export default device;