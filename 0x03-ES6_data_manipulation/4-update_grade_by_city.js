export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  const studentsWithGrade = studentsByCity.map((student) => {
    const gradeObj = newGrades.filter((grade) => grade.studentId === student.id);
    const addGrade = gradeObj.length > 0 ? gradeObj[0].grade : 'N/A';
    return {
      ...student,
      grade: addGrade,
    };
  });
  return studentsWithGrade;
}
