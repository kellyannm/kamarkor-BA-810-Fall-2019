function Student(name, grades) {
    let student = {};
    student.name = name;
    student.grades = grades ? grades : [];

    student.addGrade = function (grade) {
        student.grades.push(grade);
    }

    student.totalGrades = function () {
        let total = 0;
        student.grades.forEach(item => {
            total += item;
        });
        return total;
    }

    student.averageGrades = function () {
        return student.totalGrades() / student.grades.length;
    }

    return student;
}

module.exports = Student;