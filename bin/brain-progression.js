#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable import/named */
import readlineSync from 'readline-sync';
import { User } from '../src/cli.js';
import { brainGameStart } from '../src/index.js';

function generateArithmeticProgression() {
  const length = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 11);
  const diff = Math.floor(Math.random() * 11);
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
}

function PlayProgression(PlayerName) {
  const progression = generateArithmeticProgression();
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = hiddenValue;
  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${PlayerName}!`);
  return 0;
}

const PlayerName = User();
const gameName = PlayProgression;
console.log('What number is missing in the progression?');
brainGameStart(PlayerName, gameName);
