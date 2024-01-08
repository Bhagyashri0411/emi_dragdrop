import React, { useState } from 'react';

const ColorPicker = () => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default color

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']; // Add more colors

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={toggleColors}>A</button>

      </div>
        {showColors && (
          <div>
            {colors.map((color, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: color,
                  width: '13px',
                  height: '13px',
                  cursor: 'pointer',
                }}
                onClick={() => selectColor(color)}
              ></div>
            ))}
          </div>
        )}
      <div style={{ marginTop: '20px' }}>
        <span>Selected Color: </span>
        <div
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: selectedColor,
            display: 'inline-block',
          }}
        ></div>
      </div>
    </div>
  );
};

export default ColorPicker;
