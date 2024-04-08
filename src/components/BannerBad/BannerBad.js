import React from 'react';

function BannerBad({answer}) {
  return (
  <div className="sad banner">
  <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
</div>);
}

export default BannerBad;
