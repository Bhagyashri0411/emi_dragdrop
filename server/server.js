const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Define a sample GET endpoint
app.get('/api/data', (req, res) => {

    const data = {
        "data": [
            {
                "id": 1,
                "employee_name": "Tiger Nixon",
                "employee_salary": 320800,
                "employee_age": 61,
                "profile_image": ""
            },
            {
                "id": 2,
                "employee_name": "Garrett Winters",
                "employee_salary": 170750,
                "employee_age": 63,
                "profile_image": ""
            },
            {
                "id": 3,
                "employee_name": "Ashton Cox",
                "employee_salary": 86000,
                "employee_age": 66,
                "profile_image": ""
            },
            {
                "id": 4,
                "employee_name": "Cedric Kelly",
                "employee_salary": 433060,
                "employee_age": 22,
                "profile_image": ""
            },
            {
                "id": 5,
                "employee_name": "Airi Satou",
                "employee_salary": 162700,
                "employee_age": 33,
                "profile_image": ""
            }
        ],
        "message": "Successfully! All records has been fetched."
    }

    res.json(data);
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
