import readDatabase from '../utils';

const formatStudentData = (students) => {
  let result = '';

  const fields = Object.keys(students).sort((a, b) => a.toLowerCase()
    .localeCompare(b.toLowerCase()));

  fields.forEach((field) => {
    const names = students[field].join(', ');
    result += `Number of students in ${field}: ${students[field].length}. List: ${names}\n`;
  });

  return result.trim();
};
class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((students) => {
        res.status(200).send(`This is the list of our students\n${formatStudentData(students)}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((students) => {
        if (!students[major]) {
          res.status(200).send('List:');
        } else {
          res.status(200).send(`List: ${students[major].join(', ')}`);
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
