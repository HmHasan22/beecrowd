export function problem1005(lines) {
  const [a, b] = lines.map((line) => Number(line));
  const media = (a * 3.5 + b * 7.5) / 11;
  return `MEDIA = ${media.toFixed(5)}`;
}
