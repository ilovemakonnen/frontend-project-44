/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
// eslint-disable-next-line import/prefer-default-export
/* eslint-disable import/named */
import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);
