const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter((name) => studentsForRetake.indexOf(name) === -1)
    .map((name) => 'Good job, ' + name);

const allStudentsList = ['Irina', 'Anna', 'Ivan', 'Kolya'];
const studentsForRetake = ['Irina', 'Ivan'];

console.log(getMessagesForBestStudents(allStudentsList, studentsForRetake));
