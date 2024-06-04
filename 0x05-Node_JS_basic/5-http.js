const http = require('http');
const url = require('url');

const fs = require('fs');

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {String} path The path to the CSV data file.
 * @returns {Promise<String>} A promise that resolves with the student data as a string.
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      return;
    }

    const studentGroup = {};
    const dbField = lines[0].split(',');
    const studentNames = dbField.slice(0, dbField.length - 1);

    for (const line of lines.slice(1)) {
      const studentRecord = line.split(',');
      const studentValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];
      if (!Object.keys(studentGroup).includes(field)) {
        studentGroup[field] = [];
      }
      const studentEntries = studentNames.map((propName, idx) => [propName, studentValues[idx]]);
      studentGroup[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object.values(studentGroup).reduce((sum, group) => sum + group.length, 0);
    let result = `Number of students: ${totalStudents}`;
    for (const [field, group] of Object.entries(studentGroup)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      result += `\nNumber of students in ${field}: ${group.length}. List: ${studentNames}`;
    }

    resolve(result);
  });
});

const dbPath = process.argv[2];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (path === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    countStudents(dbPath)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = server;
