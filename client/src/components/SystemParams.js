import React, { useRef }  from 'react';
import Parameter from './Parameter'
import apiService from '../apiService';

const SystemParams = () => {

  const inputRefs = useRef([]);

  const handleSave = async () => {
    const inputValues = inputRefs.current.map(ref => ref.value);
    console.log('Current input values:', inputValues);
    await apiService.put('/save').catch(err => console.log('ERROR:', err))

  };

  return (
    <div>
      <h1>System Parameters</h1>
      <p>Accounts</p>

      {[...Array(12)].map((_, index) => (
        <Parameter key={index} inputRef={inputRefs.current[index]} />
      ))}

      <p>Assets</p>

      <p>Expenses</p>

      <p>Incomes</p>

      <button onClick={handleSave}>Save</button>
    </div>
  )

}

export default SystemParams;