export function problem(lines) {
  const [A, B] = lines.map((item) => parseFloat(item));
  const SUM = A + B;
  return SUM;
}
