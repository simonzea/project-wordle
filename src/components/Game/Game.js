import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import  EnterGuess from '../EnterGuess';
import GuessResult from '../GuessResult';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner';
import BannerBad from '../BannerBad';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  let [guessWords , setGuessWords] = React.useState([]);
  let [done , setDone] = React.useState(false);

  function addWord(word) {
    if(guessWords.length >= NUM_OF_GUESSES_ALLOWED)return;
    let checkedWord = checkGuess(word.guess,answer);
    let complited = !!(word.guess === answer);
    setDone(complited);

    let newGuessWords = [...guessWords, {checkedWord, id: Math.random()}];
    setGuessWords(newGuessWords);
  }

  return (
  <>
    {done  && <Banner attempts={guessWords.length} />}
    {!done  && guessWords.length >= NUM_OF_GUESSES_ALLOWED && <BannerBad answer={answer} />}
    <GuessResult guessWords={guessWords}/>
    <EnterGuess addWord={addWord}/>
  </>);
}

export default Game;
