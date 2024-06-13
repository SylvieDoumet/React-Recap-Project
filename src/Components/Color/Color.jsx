{
  /* Basics */
}
import React from "react";
import PropTypes from "prop-types";

import "./Color.css";

function Color({ color, onDelete }) {
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

      <button onClick={() => onDelete(color.id)}>Delete</button>
    </div>
  );
}

Color.propTypes = {
  color: PropTypes.shape({
    id: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    contrastText: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Color;
