/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export function User() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
}
