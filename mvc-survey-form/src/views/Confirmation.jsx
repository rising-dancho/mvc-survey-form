import React from 'react';
import success from './image/success.png';
import ProgressBar from '../views/ProgressBar';

function Confirmation({ onReset, step, totalSteps }) {
  return (
    <div>
      <ProgressBar step={step} totalSteps={totalSteps} />
      <h2 className="success">All done!</h2>
      <img src={success} alt="success" />
      <p className="subtitle">Your form has been successfully submitted.  </p>
      <button onClick={onReset}>Okay </button>
    </div>
  );
}

export default Confirmation;
