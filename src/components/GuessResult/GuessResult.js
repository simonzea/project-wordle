import React from 'react';

function GuessResult({guessWords}) {
  return (
  <div className="guess-results">
    {guessWords.map(({guess, id}) => (
    <p key={id} className="guess">{guess}</p>
    ))}
    
  </div>);
}

export default GuessResult;
