const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like CSS and JS

const filePath = path.join(__dirname, 'hidden_data', 'prompts.json');

// POST endpoint to handle form submissions
app.post('/submit', (req, res) => {
  const { name, phone, prompt, filamentColor, color1, color2 } = req.body;

  const newSubmission = {
    timestamp: new Date().toISOString(),
    name,
    phone,
    prompt,
    filamentColor,
    color1,
    color2
  };

  // Read current file and append new submission
  fs.readFile(filePath, 'utf8', (err, data) => {
    let submissions = [];
    if (!err && data) {
      try {
        submissions = JSON.parse(data);
      } catch (e) {
        console.error('Failed to parse existing data.');
      }
    }

    submissions.push(newSubmission);

    fs.writeFile(filePath, JSON.stringify(submissions, null, 2), (err) => {
      if (err) {
        console.error('Failed to write submission:', err);
        return res.status(500).send('Internal Server Error');
      }
      res.send('Submission received!');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
