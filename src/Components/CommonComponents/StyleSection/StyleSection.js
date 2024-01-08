
import React, { useState } from 'react';

export const BorderSection = ({ borderValues }) => {

    return {
        borderTop: `${borderValues[0]}px ${borderValues[4]} ${borderValues[5]}`,
        borderLeft: `${borderValues[1]}px ${borderValues[4]} ${borderValues[5]}`,
        borderRight: `${borderValues[2]}px ${borderValues[4]} ${borderValues[5]}`,
        borderBottom: `${borderValues[3]}px ${borderValues[4]} ${borderValues[5]}`,
    };
};

export const BackgroundSection = ({ value }) => {
    return {
        background: `linear-gradient(${value[0]}deg, ${value[1]}, ${value[2]})`,
    };

};

export const MarginSection = ({ marginValues }) => {
    return {
        marginTop: `${marginValues[0]}px`,
        marginLeft: `${marginValues[1]}px`,
        marginRight: `${marginValues[2]}px`,
        marginBottom: `${marginValues[3]}px`,
    };

};
// Padding
export const PaddingSection = ({ paddingValues }) => {
    return {
        paddingTop: `${paddingValues[0]}px`,
        paddingLeft: `${paddingValues[1]}px`,
        paddingRight: `${paddingValues[2]}px`,
        paddingBottom: `${paddingValues[3]}px`,
    };

};


export const ColorPicker = () => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default color

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const generateGradientColors = () => {
    const colors = [];
    for (let i = 0; i < 50; i++) {
      const brightness = 120 - i * 2;
      const red = `hsl(0, 100%, ${brightness}%)`; // Using HSL color model
      colors.push(red);
    }
    
    return colors;
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  const gradientColors = generateGradientColors();

  const columnCount = 10; // Number of columns
  const colorsPerColumn = gradientColors.length / columnCount;

  // Split gradientColors array into smaller arrays for columns
  const columns = [];
  for (let i = 0; i < columnCount; i++) {
    const columnColors = gradientColors.slice(i * colorsPerColumn, (i + 1) * colorsPerColumn);
    columns.push(columnColors);
  }

  return (
    <>
      <div onClick={toggleColors} className='fontColor' style={{ borderBottom: `5px solid ${selectedColor}` }}>
        A
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {showColors && (
          <div style={{ display: 'flex' }}>
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} style={{ margin: '0 1px' }}>
                {column.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: color,
                      width: '15px',
                      height: '15px',
                      margin: '2px',
                      cursor: 'pointer',
                    }}
                    onClick={() => selectColor(color)}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};


