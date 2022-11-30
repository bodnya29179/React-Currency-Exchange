export function toFixed(value) {
  if (!value) { return value; }

  const [beforePoint, afterPoint] = value.split('.');

  if (afterPoint) {
    return `${beforePoint}.${afterPoint.slice(0, 2)}`;
  }

  return value;
}
