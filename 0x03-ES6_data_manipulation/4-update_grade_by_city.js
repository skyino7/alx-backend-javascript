function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      student.grade = grade.length ? grade[0].grade : 'N/A';
      return student;
    });
}

export default updateStudentGradeByCity;
