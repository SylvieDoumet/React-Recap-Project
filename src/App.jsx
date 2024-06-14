import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";

import "./App.css";

// Basics - create unique ID, create Color Form

import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";
import { nanoid } from "nanoid";

export function App() {
  // Issue #2 Add Color  - introduce state to manage color adding
  const [colors, setColors] = useState(initialColors);

  // Issue #3 Delete Color - introduce state to manage deletion / confirmation message

  // Issue #2 Add Color - add function to handle color adding
  function handleAddColor(newColor) {
    setColors([{ ...newColor, id: nanoid() }, ...colors]);
  }

  // Issue #3 Delete Color - add function to handle color deletion

  function handleDeleteColor(id) {
    console.log("delete color", id);
    setColors(colors.filter((color) => color.id !== id));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {/* Issue #3 Delete Color  - add function to display message when no colors are left */}
      {colors.length === 0 ? (
        <p>No colors present. Please add new colors.</p>
      ) : (
        colors.map((color) => (
          <Color key={color.id} color={color} onDelete={handleDeleteColor} />
        ))
      )}
    </>
  );
}

export default App;
// export {handleDeleteColor};
