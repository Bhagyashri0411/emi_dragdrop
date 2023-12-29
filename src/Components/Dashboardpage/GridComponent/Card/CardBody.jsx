import { AgChartsReact } from 'ag-charts-react';
import React from 'react'

export default function CardBody(props) {
  return (
    <>
      {props.addedBodyText.map((text, key) =>
        <div className={`text ${props.selectedText[3] === "body" && props.selectedText[1] === text.id && 'selected'}`
        }
          key={key}
          style={{
            fontStyle: text?.styles.fontstyle.includes('italic') ? 'italic' : 'normal',
            textDecoration: text?.styles.fontstyle.includes('underlined') ? 'underline' : 'none',
            color: text?.styles.color,
            textAlign: text?.styles.align,
            fontFamily: text?.styles.fontFamily,
            fontSize: `${text?.styles.fontSize}px`,
            fontWeight: text?.styles.fontstyle.includes('bold') ? 'bold' : text?.styles.fontWeight,
          }}
          onClick={(e) => {
            e.stopPropagation();
            props.setSelectedText([props.item.id, text.id, props.gridBlock.mainid, "body"]);
          }}
        >
          <text.type> {text.toptext} </text.type>
        </div>
      )}
    </>
  )
}

export const TableInCardBody = ({ data }) => {
  return (
    <div className='tableComponents'>
      {/* <div style={{ height: "150px", overflow: "auto" }}> */}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Profile Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_salary}</td>
              <td>{employee.employee_age}</td>
              <td>
                {employee.profile_image ? (
                  <img src={employee.profile_image} alt="Profile" />
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* </div> */}
    </div>
  )
}


export function DoughnutChart() {
  const options = {
    data: [
      { label: 'Category 1', value: 25 },
      { label: 'Category 2', value: 35 },
      { label: 'Category 3', value: 20 },
    ],

    series: [
      {
        type: 'pie',
        calloutLabelKey: 'label',
        angleKey: 'value',
        innerRadiusRatio: 0.7,
        innerLabels: [
          {
            text: '99',
            fontWeight: 'bold',
          },
        ]
      },
    ],
  }
  const containerStyle = {
    width: '100%',
    // height: '250px',
    background: 'transparent', // Set the chart container's background to transparent
  };
  return (
    <div style={containerStyle}>
      <h6>DoughnutChart</h6>
      <AgChartsReact options={options} />
    </div>
  );


}
