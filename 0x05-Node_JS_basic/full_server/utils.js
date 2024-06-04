import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      resolve({});
      return;
    }

    const studentGroup = {};

    for (const line of lines.slice(1)) {
      const studentRecord = line.split(',');
      const field = studentRecord[studentRecord.length - 1];
      const firstname = studentRecord[0];
      if (!Object.keys(studentGroup).includes(field)) {
        studentGroup[field] = [];
      }
      studentGroup[field].push(firstname);
    }
    resolve(studentGroup);
  });
});

export default readDatabase;
