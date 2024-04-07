import React from 'react';

function EnterGuess({addWord}) {
let [guess, setGuess] = React.useState('');

  function isString(string) {
    return typeof string === 'string';
  }

  function InputChange(event) {
    setGuess(isString(event.target.value) ? event.target.value.toUpperCase() : '');
  }

  function OnSubmit(event) {
    event.preventDefault();
    console.log(guess);
    addWord({guess, id: Math.random()});
    setGuess('');
  }

  return (
  <form 
    className="guess-input-wrapper"
    onSubmit={OnSubmit}
  >
  <label htmlFor="guess-input">Enter guess:</label>
  <input 
    required
    id="guess-input"
    type="text"
    value={guess}
    onChange={InputChange}
    pattern='[a-zA-Z]{5}'
   />
</form>
);
}

export default EnterGuess;
