import React from 'react';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import { range } from '../../utils';

function GuessResult({guessWords}) {
  return (
  <div className="guess-results">
    {guessWords.map(({guess, id}) => (
    <p key={id} className="guess">{guess.split('').map((letter,index) => (
      <span key={index} className="cell">{letter}</span>))}
    </p>
    ))}

    {range(0,NUM_OF_GUESSES_ALLOWED - guessWords.length).map( (i)=>(
       <p key={i} className="guess">{
        range(0,5).map((index) => (
        <span key={index} className="cell"></span>))}
      </p>
    ))}
  </div>);
}

export default GuessResult;
