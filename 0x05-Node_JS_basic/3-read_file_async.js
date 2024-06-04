/**
 * Counts the students in a CSV data file asynchronously.
 * @param {String} path The path to the CSV data file.
 * @returns {Promise} A promise that resolves when the file is read and processed.
*/

const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      resolve();
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
    const result = console.log(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroup)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }

    resolve(result);
  });
});

module.exports = countStudents;
