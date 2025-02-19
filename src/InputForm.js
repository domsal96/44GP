import React, { useState } from 'react';

function InputForm() {
  // Declare the state variable 'inputText'
  const [inputText, setInputText] = useState('');

  // Handle the change in the input field
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <p>You typed: {inputText}</p>
    </div>
  );
}

export default InputForm;
