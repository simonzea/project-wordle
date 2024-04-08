import React from 'react';

function Banner({ attempts}) {
  return (
  <div className="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong> { attempts } guesses</strong>.
  </p>
</div>);
}

export default Banner;
