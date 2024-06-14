import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { useState } from "react";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },

  // Issue #4 Edit Color
  onCancel,
  submitLabel = "ADD COLOR",
}) {
  // Issue #4 Edit Color - add useState for initialData
  const [role, setRole] = useState(initialData.role);
  const [hex, setHex] = useState(initialData.hex);
  const [contrastText, setContrastText] = useState(initialData.contrastText);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
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
          defaultValue={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={contrastText} />
      </label>
      <br />
      <button type="submit">{submitLabel}</button>
      <button type="button" onClick={onCancel}>
        CANCEL
      </button>
    </form>
  );
}
