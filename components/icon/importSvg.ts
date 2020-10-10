import svgList from './svgList';

const getSvgContent = (): string => `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    id="__ALGAE_UI_SVG_SPRITE_NODE__"
    style="position:absolute;width:0;height:0"
  >
    ${Object.keys(svgList)
      .map((id) => {
        return svgList[id].replace(
          /^<svg(.*)<\/svg>$/,
          (match, p1) => `<symbol id=${id}${p1}</symbol>`
        );
      })
      .join('')}
  </svg>`;

const importSvg = () => {
  if (!document.getElementById('__ALGAE_UI_SVG_SPRITE_NODE__')) {
    document.body.insertAdjacentHTML('afterbegin', getSvgContent());
  }
};

export default importSvg;
