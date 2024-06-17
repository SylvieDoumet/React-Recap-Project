{
  /* Basics */
}
import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";

// Issue 3 : Delete Color - Add Confirmation Deletion - State (initially set to false)
// Issue 4: Edit Color - Add Edit - State (initially set to false)

function Color({ color, onDelete, onUpdate }) {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
      {/* Issue 3: Delete Color - Step 1 Add a DELETE button to each color card and passed it a isConfirmingDelete function which opens up a confirmation window with a 
      message (Are you sure you want to delete?) and two buttons (Yes, No) */}
      {/* Button - DELETE : Opens up the cofirmation windows to choose between the YES, I want to delete. and NO, I don't want to delete - button   */}
      <button onClick={() => setIsConfirmingDelete(true)}>Delete</button>
      {/* Issue 4: Edit Color - Step 1 Add an EDIT button to each color card and passed it a isEditing function which opens up a form to edit the color card */}
      {/* Button - EDIT : Opens up the form to edit the color card */}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      {/* Issue 3: Delete Color - Step 2 Add two Buttons YES & NO to confirm /unconfirm the color deleting and a subsequent message "Are you sure?" going for conrecte deletion when tapping YES  */}
      {isConfirmingDelete && (
        <div className="confirmation-dialog">
          <p className="color-card-highlight">
            Are you sure you want to delete?
          </p>

          {/* Button - YES : Deletes the color via its ID  */}
          <button onClick={() => onDelete(color.id)}>Yes</button>

          {/* Button - NO : sets the useState back to initial (ConfirmingDelete ? false)  */}
          <button onClick={() => setIsConfirmingDelete(false)}>No</button>
        </div>
      )}

      {/* Issue 4: Edit Color - Step 2 Add a form to edit the color card - onCancel sets the useState back to initial (setIsEditing - false) */}
      {isEditing && (
        <div className="editing-dialog">
          <ColorForm
            initialData={color}
            onSubmitColor={(updatetColor) => {
              onUpdate({ ...color, ...updatetColor });
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
            submitLabel="SAVE"
          />
        </div>
      )}
    </div>
  );
}

export default Color;
