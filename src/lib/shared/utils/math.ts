export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function getRandomIntOr1(max: number): number {
  const randomInt = getRandomInt(max);
  return randomInt ? randomInt : 1;
}

export function getRandomIntInRange(
  min: number,
  max: number
): number {
  return Math.floor(Math.random() * (max - min)) + min;
}
