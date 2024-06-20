// import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import "./Components/ColorInput/ColorInput.css";
// Basics - create unique ID, create Color Form

import { useState, useEffect } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";
import { nanoid } from "nanoid";
// import { useLocalStorageState } from "use-local-storage-state";

// Issue #8 Theme - import initialThemes
import { initialThemes } from "./Components/Themes/InitialThemes";

export function App() {
  // Issue #2 Add Color  - introduce state to manage color adding
  // const [colors, setColors] = useState(initialColors);

  // const [colors, setColors] = useLocalStorageState("colors", []);
  // const [editColorId, setEditColorId] = useLocalStorageState(
  //   "editColorId",
  //   null
  // );

  // Issue #8 Theme - introduce state to manage themes

  const [themes, setThemes] = useState(() => {
    const savedThemes = localStorage.getItem("themes");
    return savedThemes ? JSON.parse(savedThemes) : initialThemes;
  });

  const [currentThemeId, setCurrentThemeId] = useState(themes[0].id);

  useEffect(() => {
    localStorage.setItem("themes", JSON.stringify(themes));
  }, [themes]);

  // // Issue #2 Add Color - add function to handle color adding
  // function handleAddColor(newColor) {
  //   setColors([{ ...newColor, id: nanoid() }, ...colors]);
  // }

  // // Issue #3 Delete Color - add function to handle color deletion

  // function handleDeleteColor(id) {
  //   setColors(colors.filter((color) => color.id !== id));
  // }

  // // Issue #4 Edit Color - add function to handle color update

  // function handleUpdateColor(updatedColor) {
  //   console.log("update color", updatedColor);
  //   setColors(
  //     colors.map((color) =>
  //       color.id === updatedColor.id ? updatedColor : color
  //     )
  //   );
  // }
  // function handleEditColor(colorId) {
  //   setEditColorId(colorId);
  // }

  // // Issue #4 Edit Color - add function to handle color update

  // function handleUpdateColor(updatedColor) {
  //   console.log("update color", updatedColor);
  //   setColors(
  //     colors.map((color) =>
  //       color.id === updatedColor.id ? updatedColor : color
  //     )
  //   );
  // }
  // function handleEditColor(colorId) {
  //   setEditColorId(colorId);
  // }

  // Issue #8 Theme - add function to handle theme selection for deletion and update

  function handleAddColor(newColor) {
    setThemes(
      themes.map((theme) => {
        if (theme.id === currentThemeId) {
          return {
            ...theme,
            colors: [{ ...newColor, id: nanoid() }, ...theme.colors],
          };
        }
        return theme;
      })
    );
  }

  function handleDeleteColor(id) {
    setThemes(
      themes.map((theme) => {
        if (theme.id === currentThemeId) {
          return {
            ...theme,
            colors: theme.colors.filter((color) => color.id !== id),
          };
        }
        return theme;
      })
    );
  }

  function handleUpdateColor(updatedColor) {
    setThemes(
      themes.map((theme) => {
        if (theme.id === currentThemeId) {
          return {
            ...theme,
            colors: theme.colors.map((color) =>
              color.id === updatedColor.id ? updatedColor : color
            ),
          };
        }
        return theme;
      })
    );
  }

  const currentTheme = themes.find((theme) => theme.id === currentThemeId);

  // Return statement for all Issues till Issue 7

  //   return (
  //     <div className="app">
  //       <h1>Theme Creator</h1>

  //       {/* Issue #3 Delete Color  - add function to display message when no colors are left */}
  //       {colors.length === 0 ? (
  //         <p>No colors present. Please add new colors.</p>
  //       ) : (
  //         colors.map((color) => (
  //           <Color
  //             key={color.id}
  //             color={color}
  //             onDelete={handleDeleteColor}
  //             onUpdate={handleUpdateColor}
  //             onEdit={handleEditColor}
  //             isEditing={editColorId === color.id}
  //           />
  //         ))
  //       )}
  //       {colors.map((color, index) => (
  //         <ColorForm
  //           key={index}
  //           initialData={color}
  //           onAddColor={handleAddColor}
  //         />
  //       ))}
  //     </div>
  //   );
  // }
  // export default App;

  // Updatet Return Statement for Issue 8 based on Current Theme

  return (
    <div className="app">
      <h1>Theme Creator</h1>
      <select
        value={currentThemeId}
        onChange={(e) => setCurrentThemeId(e.target.value)}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
      {currentTheme.colors.map((color) => (
        <Color
          key={color.id}
          id={color.id}
          hex={color.hex}
          role={color.role}
          contrastText={color.contrastText}
          onDelete={handleDeleteColor}
          onUpdate={handleUpdateColor}
        />
      ))}
      <div className="colorInputSection">
        <ColorForm onAddColor={handleAddColor} />
      </div>
    </div>
  );
}

export default App;
