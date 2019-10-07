function Roster() {
    let roster = [];
    roster.addStudent = function (student) {
        roster.push(student);
    }

    roster.calcGrades = function () {
        let averagesArray = [];
        roster.forEach(item => {
            averagesArray.push(item.averageGrades());
        });

        return averagesArray;
    }

    return roster;
}

module.exports = Roster;