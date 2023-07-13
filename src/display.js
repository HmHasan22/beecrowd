const form = document.getElementById('form');
const textarea = document.getElementById('textarea');
const output = document.getElementById('output');
import { problem1006 } from '../problems/1006.js';
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = textarea.value.replace().split('\n');
  const result = problem1006(input);
  output.innerHTML = result;
  // textarea.value = '';
});
