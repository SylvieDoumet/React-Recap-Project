import { useLocalStorageState } from "use-local-storage-state";

// Issue 5 : Local storage state package

function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useLocalStorageState(id, defaultValue);

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
