import React, { useState } from 'react';
import apiService from '../apiService';
import Parameter from './Parameter';

const Expense = () => {
  const params = Array('id','name','balance','location','incomes','expenses')
  const [paramVals, setParamVals] = useState(Array(params.length).fill(''));

  const handleSave = async () => {
    console.log('Current input values:', paramVals);
    await apiService.put('/save', paramVals).catch(err => console.log('ERROR:', err));
  };

  const handleEdit = async () => {
    await apiService.put('/save', paramVals).catch(err => console.log('ERROR:', err));
  };

  const handleDelete = async () => {
    console.log('Current input values:', paramVals);
    await apiService.put('/save', paramVals).catch(err => console.log('ERROR:', err));
  };

  const handleInputChange = (i, val) => {
    const newVals = [...paramVals];
    newVals[i] = val;
    setParamVals(newVals);
  };

  return (
    <div>
      {params.map((param, i) => (
          <Parameter
            key={i}
            label={param}
            value={paramVals[i]}
            onChange={(eventVal) => handleInputChange(i, eventVal)}
          />
        )
      )}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Expense;