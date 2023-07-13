const lines = prompt().split(' ');
const [n] = lines.map((item) => parseFloat(item));
const A = (Math.pow(n, 2) * 3.14159).toFixed(4);
console.log('A = ' + A);
