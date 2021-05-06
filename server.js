// Setup empty JS object to act as endpoint for all routes
let projectData = {};
// Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Start up an instance of app
const app = express();
/* Dependencies */
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Cors for cross origin allowance
// Initialize the main project folder
app.use(express.static("website"));
const port = 3000;
app.listen(port, () => {console.log(`server is running and listening to port ${port}` );});
// Spin up the server
// Callback to debug
// Initialize all route with a callback function
app.post('/addData', (req, res) => {
    projectData.temp = req.body.temp;
    projectData.date = req.body.date;
    projectData.userResponse = req.body.feelings;
});
// Callback function to complete GET '/all'
app.get('/all', (req, res) => {
    res.send(projectData);
    });
