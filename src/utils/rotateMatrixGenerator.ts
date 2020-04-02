interface OriginCoordinate {
  x: number;
  y: number;
}

const rotateMatrixGenerator = (
  rotate: number,
  { x: currentOriginX, y: currentOriginY }: OriginCoordinate,
  { x: transformOriginX, y: transformOriginY }: OriginCoordinate
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
