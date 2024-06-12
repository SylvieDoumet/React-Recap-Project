import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

// Basics - create unique ID, create Color Form 

import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";
import { nanoid } from "nanoid";

function App() {

  // Issue #2 Add Color  - introduce state to manage color adding 
  const [colors, setColors] = useState(initialColors);


  // Issue #3 Delete Color - introduce state to manage deletion / confirmation message 
const [confirmDeleteId, setConfirmDeleteId] = useState(null);


// Issue #2 Add Color - add function to handle color adding
  const handleAddColor = (newColor) => {
    setColors([{ ...newColor, id: nanoid() }, ...colors]);
  };

// Issue #3 Delete Color - add function to handle color deletion 
const handleDeleteColor = (id) => {
  setColors(colors.filter(color => color.id !== id);
  setConfirmDeleteId(null);
};

// Issue #3 Delete Color - add function to handle confirmation state 

const handleConfirmDelete = (id) => {
  setConfirmDeleteId(null);
};

const handleCancelDelete = (id) => {
  setConfirmDeleteId(null);
};

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />


{/* Issue #3 Delete Color  - add function to display message when no colors are left */}
{colors.length === 0 ? (
<p>No colors present. Please add new colors.</p>
) : (

    colors.map((color) => (
        <Color 
        key={color.id} 
        color={color} 
        onDelete={() => handleConfirmDelete(color.id)}
        />
      ))
)}

{/* Issue 2 Add Colors - keep mapping function as it is given */}
      {/* {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))} */}
 
 {/* Issue #3 Delete Color - add a delete button to each color card */}
 
{confirmDeleteId && (
  <div className="confirmation-dialog">
  <p className="color-card-highlight">Are you sure you want to delete?</p>
  <button onClick={() => handleDeleteColor(setConfirmDeleteId)}>Yes</button>
<button onClick={handleCancelDelete}>No</button>
  </div>
)}
</>
);
}

export default App;
