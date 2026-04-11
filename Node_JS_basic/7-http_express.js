const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

/**
 * Reads the database file asynchronously and returns the formatted result
 * @param {string} path
 * @returns {Promise<string>}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const fields = {};

      for (const student of students) {
        const parts = student.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      let output = `Number of students: ${students.length}`;

      for (const field of Object.keys(fields)) {
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      }

      resolve(output);
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');

  try {
    const result = await countStudents(database);
    res.send(`This is the list of our students\n${result}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(1245);

module.exports = app;
