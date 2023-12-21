import React from 'react';

const TableComponent = ({ data }) => {
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
    );
};

export default TableComponent;
