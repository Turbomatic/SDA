class School {
    constructor(scName) {
        this.scName = scName;
        this.classrooms = [];
    }
    
    addClassroom(classroom) {
        this.classrooms.push(classroom);
    }

    getClassroom() { 
        let clNames = [];
        for (let i = 0; i < this.classrooms.length; i++) {
            clNames.push(this.classrooms[i].clName);
        }
        return clNames;
    }

    getSchoolAverage() {
        let totalGrades = 0;
        let totalCount = 0;
    
        for (let i = 0; i < this.classrooms.length; i++) {
            let classroom = this.classrooms[i]; 
            if (classroom.students.length > 0) {
                totalGrades += classroom.getAverage() * classroom.students.length;
                totalCount += classroom.students.length;
            }
        }
    
        if (totalCount > 0) {
            return totalGrades / totalCount;
        } else {
            return 0;
        }
    }
}

class Classroom {
    constructor(clName, subjects) {
        this.clName = clName;
        this.subjects = subjects;
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    getSubjects() {
        return this.subjects;
    }

    getAverage() {
        if (this.students.length === 0) {
            return 0;
        }
    
        let totalGrades = 0;
        let totalCount = 0;
    
        for (let i = 0; i < this.students.length; i++) {
            let student = this.students[i];
            for (let j = 0; j < student.grades.length; j++) {
                totalGrades += student.grades[j];
                totalCount++;
            }
        }
    
        return totalGrades / totalCount;
    }
}

class Student {
    constructor(name, grades, classroom) {
        this.name = name;
        this.grades = grades;
        this.classroom = classroom;
        this.classroom.addStudent(this);
    }

    getName() {
        return this.name;
    }

    getGrades() {
        return this.grades;
    }

    getSubjects() {
        return this.classroom.getSubjects();
    }
}
const clSubject = ["Mat", "Fiz", "Muz"];

let class1 = new Classroom("Class 1", clSubject);

let student1 = new Student("Topi", [10, 9, 9], class1);
let student2 = new Student("Robi", [8, 9, 9], class1);
let student3 = new Student("Moti", [10, 7, 9], class1);

console.log(class1.getAverage());
console.log(class1.getSubjects());
console.log(student1.getName());
console.log(student1.getGrades());

let school = new School("My School");
school.addClassroom(class1);
console.log(school.getClassroom());
console.log(school.getSchoolAverage());
