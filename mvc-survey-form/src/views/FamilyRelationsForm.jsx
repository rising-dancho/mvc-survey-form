import React, { useState } from 'react';

function FamilyRelationsForm({ data, onAddRelation, onNext, onPrevious }) {
  const [relation, setRelation] = useState({
    name: '',
    relationship: '',
    age: '',
  });

  function handleChange(e) {
    setRelation({ ...relation, [e.target.name]: e.target.value });
  }

  function handleAdd() {
    onAddRelation(relation);
    setRelation({ name: '', relationship: '', age: '' });
  }

  return (
    <div>
      <h2>Family Relations: </h2>
      {data.map((rel, index) => (
        <div key={index}>
          <p>
            {rel.name} - {rel.relationship} - {rel.age}
          </p>
        </div>
      ))}
      <div className="label">Name</div>
      <input
        type="text"
        name="name"
        value={relation.name}
        onChange={handleChange}
      />
      <div className="label">Relationship</div>
      <input
        type="text"
        name="relationship"
        value={relation.relationship}
        onChange={handleChange}
      />
      <div className="label">Age</div>
      <input
        type="number"
        name="age"
        value={relation.age}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add Family Member</button>
      <div className='btns-wrapper'>
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default FamilyRelationsForm;
