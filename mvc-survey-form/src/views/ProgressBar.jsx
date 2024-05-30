import React from 'react';

function ProgressBar({ step, totalSteps }) {
  const progress = ((step / totalSteps) * 100).toFixed(2);
  return (
    <div className="progress-bar">
      <div className="progress-text" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;
