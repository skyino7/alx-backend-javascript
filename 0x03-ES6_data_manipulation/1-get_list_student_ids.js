function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((id) => id.id);
}

export default getListStudentIds;