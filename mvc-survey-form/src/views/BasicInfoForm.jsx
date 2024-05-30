import React from 'react';

function BasicInfoForm({ data, onChange, onNext }) {
  function handleChange(e) {
    onChange({ [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h2>Basic Info: </h2>
      <div className="label">Name</div>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <div className="label">Birthday</div>
      <input
        type="date"
        name="birthday"
        value={data.birthday}
        onChange={handleChange}
      />
      <div className="label">Address</div>
      <input
        type="text"
        name="address"
        value={data.address}
        onChange={handleChange}
      />
      <div className="label">Email</div>
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <div className="label">Phone</div>
      <input
        type="text"
        name="phone"
        value={data.phone}
        onChange={handleChange}
      />
      <div className="label">Height (cm)</div>
      <input
        type="number"
        name="height"
        value={data.height}
        onChange={handleChange}
      />
      <div className="label">Weight (kg)</div>
      <input
        type="number"
        name="weight"
        value={data.weight}
        onChange={handleChange}
      />
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default BasicInfoForm;
