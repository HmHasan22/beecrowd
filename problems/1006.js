export function problem1006(lines) {
  const [a, b, c] = lines.map((item) => parseFloat(item));
  const grade = parseFloat((a * 2 + b * 3 + c * 5) / 10).toFixed(1);
  console.log(`MEDIA = ${grade}`);
  return grade;
}
