import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import CopyToClipboard from "../CopyToClipboardButton/CopyToClipboardButton";
import { useState } from "react";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "", hex: "", contrastText: "" },

  // Issue #4 Edit Color
  onCancel,
  submitLabel = "ADD COLOR",
}) {
  // Issue #4 Edit Color - add useState for initialData
  const [role, setRole] = useState(initialData.role);

  // Values not read furthermore, why ?
  const [hex, setHex] = useState(initialData.hex);
  const [contrastText, setContrastText] = useState(initialData.contrastText);

  function handleSubmit(event) {
    event.preventDefault();

    // Issue 1
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    // onSubmitColor(data);

    // Issue 5
    onSubmitColor({ role, hex, contrastText });
  }

  // Issue #4 Edit Color - add ColorInput for hex and contrastText ; Adapting & creating Submit and Cancel button
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          // defaultValue={role}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput
          id="hex"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />
        <CopyToClipboard text={hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput
          id="contrastText"
          value={contrastText}
          onChange={(e) => setContrastText(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">{submitLabel}</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          CANCEL
        </button>
      )}
    </form>
  );
}
