import React from 'react';
import success from '../images/success.png';

function Confirmation({ onReset }) {
  return (
    <div>
      <img src={success} alt="success" />
      <h2 className="success">All done!</h2>
      <p className="subtitle">Your form has been successfully submitted</p>
      <button onClick={onReset}>Okay </button>
    </div>
  );
}

export default Confirmation;
