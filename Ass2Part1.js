let Student = function(name, grades){
    this.name = name;
    this.grades = grades;

    this.totalGrades = function(){
        var total = 0;
        this.grades.forEach(item => {
            total += item;
        });
        return total;
    }

    this.averageGrades = function(){
        return average = this.totalGrades() / grades.length;
    }

}

let student1 = new Student('Sue', [50, 100]);
console.log(student1.averageGrades());