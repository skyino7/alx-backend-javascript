function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrades = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      const grade = matchingGrades.length ? matchingGrades[0].grade : 'N/A';
      return { ...student, grade };
    });
}

export default updateStudentGradeByCity;
