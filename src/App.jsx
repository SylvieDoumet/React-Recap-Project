// import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

// Basics - create unique ID, create Color Form

// import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";
import { nanoid } from "nanoid";

function App() {
  // Issue #2 Add Color  - introduce state to manage color adding
  // const [colors, setColors] = useState(initialColors);

  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: [
      // empty value or self setted one - to test out
      // {id:1, role:"Primary, hex: "#FF0000", contrastText: "#FFFFFF"},
    ],
  });

  // Issue #2 Add Color - add function to handle color adding
  function handleAddColor(newColor) {
    setColors([{ ...newColor, id: nanoid() }, ...colors]);
  }

  // Issue #3 Delete Color - add function to handle color deletion

  function handleDeleteColor(id) {
    console.log("delete color", id);
    setColors(colors.filter((color) => color.id !== id));
  }

  // Issue #4 Edit Color - add function to handle color update

  function handleUpdateColor(updatedColor) {
    console.log("update color", updatedColor);
    setColors(
      colors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  }

  return (
    <div className="app">
      <h1>Theme Creator</h1>

      {/* Issue #3 Delete Color  - add function to display message when no colors are left */}
      {colors.length === 0 ? (
        <p>No colors present. Please add new colors.</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor}
            onUpdate={handleUpdateColor}
          />
        ))
      )}
      <ColorForm onSubmitColor={handleAddColor} />
    </div>
  );
}
export default App;
