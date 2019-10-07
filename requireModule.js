
let Student = require('./studentModule');


let student1 = new Student('Bob');
student1.addGrade(75);
student1.addGrade(100);

console.log(student1.averageGrades());




let Roster = require('./rosterModule');

let student2 = new Student('Bob');
student2.addGrade(75);
student2.addGrade(100);
let student3 = new Student('Sue');
student3.addGrade(90);
student3.addGrade(100);

let roster = new Roster();
roster.addStudent(student1);
roster.addStudent(student2);

console.log(roster.calcGrades());