import { useState, useEffect } from "react";

// Issue 5 : Local storage state package

function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(() => {
    const savedValue = localStorage.getItem(id);
    return savedValue ? JSON.parse(savedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(inputValue));
  }, [id, inputValue]);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input type="color" value={inputValue} onChange={handleInputValue} />
    </>
  );
}

export default ColorInput;
