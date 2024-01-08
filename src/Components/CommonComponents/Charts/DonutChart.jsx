import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const DonutChart = () => {
  const [data, setData] = useState({
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
    borderWidth:0
  });

  const handleChangeLabel = (index, label) => {
    const newLabels = [...data.labels];
    newLabels[index] = label;
    setData({
      ...data,
      labels: newLabels,
    });
  };

  const handleChangeValue = (index, value) => {
    const newValues = [...data.datasets[0].data];
    newValues[index] = value;
    setData({
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          data: newValues,
        },
      ],
    });
  };

  const handleChangeColor = (index, color) => {
    const newColors = [...data.datasets[0].backgroundColor];
    newColors[index] = color;
    setData({
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          backgroundColor: newColors,
          hoverBackgroundColor: newColors,
        },
      ],
    });
  };

  const handleAddLabel = () => {
    const newLabel = `Label ${data.labels.length + 1}`;
    setData({
      ...data,
      labels: [...data.labels, newLabel],
      datasets: [
        {
          ...data.datasets[0],
          data: [...data.datasets[0].data, 10], // Setting initial value for the new label
          backgroundColor: [
            ...data.datasets[0].backgroundColor,
            '#' + Math.floor(Math.random() * 16777215).toString(16), // Generating random color
          ],
          hoverBackgroundColor: [
            ...data.datasets[0].hoverBackgroundColor,
            '#' + Math.floor(Math.random() * 16777215).toString(16), // Generating random hover color
          ],
        },
      ],
    });
  };

  const handleDeleteLabel = (index) => {
    const newLabels = data.labels.filter((_, idx) => idx !== index);
    const newData = {
      ...data,
      labels: newLabels,
      datasets: [
        {
          ...data.datasets[0],
          data: data.datasets[0].data.filter((_, idx) => idx !== index),
          backgroundColor: data.datasets[0].backgroundColor.filter((_, idx) => idx !== index),
          hoverBackgroundColor: data.datasets[0].hoverBackgroundColor.filter((_, idx) => idx !== index),
        },
      ],
    };
    setData(newData);
  };

  return (
    <div >
      <div className='row align-items-center'>
        <div className='col-md-3'>

          <Doughnut data={data} />
        </div>
        <div className='col-md-1'/>
        <div className='col-md-4'>

          {data.labels.map((label, index) => (
            <div className='blockgraph' key={index}>
              <div className='iconround' style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}></div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        {data.labels.map((label, index) => (
          <div key={index}>
            <input
              type="text"
              value={label}
              onChange={(e) => handleChangeLabel(index, e.target.value)}
            />
            <input
              type="number"
              value={data.datasets[0].data[index]}
              onChange={(e) => handleChangeValue(index, e.target.value)}
            />
            <input
              type="color"
              value={data.datasets[0].backgroundColor[index]}
              onChange={(e) => handleChangeColor(index, e.target.value)}
            />
            <button onClick={() => handleDeleteLabel(index)}>Delete</button>
          </div>
        ))}

        <button onClick={handleAddLabel}>Add Label</button>
      </div>
    </div>
  );
};

export default DonutChart;
