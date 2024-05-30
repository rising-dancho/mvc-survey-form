import React from 'react';

function MedicalHistoryForm({ data, onChange, onNext, onPrevious }) {
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    onChange({ [name]: type === 'checkbox' ? checked : value });
  }
  return (
    <div>
      <h2>Medical History: </h2>

      <div className="label">Blood Type</div>
      <input
        type="text"
        name="bloodType"
        value={data.bloodType}
        onChange={handleChange}
        autoFocus
      />
      <div className="label">Other previous conditions</div>
      <textarea
        name="previousConditions"
        value={data.previousConditions}
        onChange={handleChange}
      />

      <div className="label questions-wrapper">
        Do you drink alcohol?
        <input
          className="checkbox"
          type="checkbox"
          name="drinkAlcohol"
          checked={data.drinkAlcohol}
          onChange={handleChange}
        />
      </div>
      {data.drinkAlcohol && (
        <textarea
          name="alcoholFrequency"
          value={data.alcoholFrequency}
          onChange={handleChange}
          placeholder="How often?"
        />
      )}

      <div className="label questions-wrapper">
        Do you smoke?
        <input
          className="checkbox"
          type="checkbox"
          name="smoke"
          checked={data.smoke}
          onChange={handleChange}
        />
      </div>
      {data.smoke && (
        <textarea
          name="smokeFrequency"
          value={data.smokeFrequency}
          onChange={handleChange}
          placeholder="How often?"
        />
      )}
      <div className="btns-wrapper">
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default MedicalHistoryForm;
