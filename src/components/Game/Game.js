import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import  EnterGuess from '../EnterGuess';
import GuessResult from '../GuessResult'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  let [guessWords , setGuessWords] = React.useState([]);

  function addWord(word) {
    let newGuessWords = [...guessWords, word];
    setGuessWords(newGuessWords);
  }

  return (
  <>
    <GuessResult guessWords={guessWords}/>
    <EnterGuess addWord={addWord}/>
  </>);
}

export default Game;
