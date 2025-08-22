// importing packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create App and define portnumber
const PORT= 3000;
const app = express();

// Middleware
// Parses incoming JSON data from the request body.
// Converts it into a JavaScript object, so you can access it via req.body
app.use(bodyParser.json());
app.use(cors());


// declaring the variable
let submittedData = [];

// routing
app.post('/enroll', function (req, res) {
  const submissionWithTime = {...req.body, submittedAt: new Date().toISOString(),};
  console.log(submissionWithTime);
  submittedData.push(submissionWithTime);
  res.status(200).send({ message: "Data received" });
});

app.get('/submissions', function (req, res) {
  res.json(submittedData); 
});


// starts server
app.listen(PORT, function(){
console.log("server running on localhost:" + PORT)
});