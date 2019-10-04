const arcGenerator = (
  radius: number,
  percentage: number,
  arcAngle: number = 360
) => {
  return `${percentage! * radius! * 2 * Math.PI * (arcAngle / 360)} ${radius! *
    2 *
    Math.PI}`;
};

export default arcGenerator;
