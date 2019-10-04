const rotateMatrixGenerator = (
  rotate: number,
  currentOriginX: number,
  currentOriginY: number,
  transformOriginX: number,
  transformOriginY: number
) => {
  const cos = Math.cos((rotate / 180) * Math.PI);
  const sin = Math.sin((rotate / 180) * Math.PI);

  return `matrix(${cos}, ${sin}, ${-sin}, ${cos}, ${transformOriginX -
    cos * currentOriginX +
    sin * currentOriginY}, ${transformOriginY -
    sin * currentOriginX -
    cos * currentOriginY})`;
};

export default rotateMatrixGenerator;
