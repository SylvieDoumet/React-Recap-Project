{
  /* Basics */
}
import { useState } from "react";

import "./Color.css";

function Color({ color, onDelete }) {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  console.log(isConfirmingDelete);
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {/* Issue 3: Delete Color - Added a delete button to each color card and passed it a 'onDelete' handler */}
      {/* set button onClick to handleConfirmDelete in app.jsx */}
      <button onClick={() => setIsConfirmingDelete(true)}>Delete</button>

      {/* Issue #3 Delete Color - add a delete button to each color card */}

      {isConfirmingDelete && (
        <div className="confirmation-dialog">
          <p className="color-card-highlight">
            Are you sure you want to delete?
          </p>
          <button onClick={() => onDelete(color.id)}>Yes</button>
          <button onClick={() => setIsConfirmingDelete(false)}>No</button>
        </div>
      )}
    </div>
  );
}

export default Color;
