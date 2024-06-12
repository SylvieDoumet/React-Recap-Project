import "./Color.css";

export default function Color({ color }) {
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

      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
