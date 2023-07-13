const lines = prompt().split(' ');
const [A, B] = lines.map((item) => parseInt(item));
const PROD = A * B;
console.log(`PROD = ${PROD}`);
