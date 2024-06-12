import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

// Issue #2

import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useState(initialColors);

  const handleAddColor = (newColor) => {
    setColors([{ ...newColor, id: nanoid() }, ...colors]);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />

      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
