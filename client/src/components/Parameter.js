import React, { useRef } from 'react';

const Parameter = ({ inputRef }) => {

  return (
    <div>
      <label>Account Name: </label>
        <input type="text" ref={ref => inputRef = ref} />
    </div>
  )

}

export default Parameter;