class Student {
  constructor(name, stgender) {
    this.name = name;
    this.stgender = stgender;
  }

  getStudentName() {
    return this.name;
  }

  getStudentGender() {
    return this.stgender;
  }
}

class ClassRoom {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  getStudent() {
    let stNames = [];
    for (let i = 0; i < this.students.length; i++) {
      stNames.push(this.students[i].getStudentName());
    }
    return stNames;
  }

  pickTeam() {
    let femaleTeam = [];
    let maleTeam = [];

    if (this.students.length === 0) {
      return "No students";
    }

    for (let i = 0; i < this.students.length; i++) {
      let student = this.students[i];
      if (student.getStudentGender() === "Female") {
        femaleTeam.push(student.getStudentName());
      } else if (student.getStudentGender() === "Male") {
        maleTeam.push(student.getStudentName());
      }
    }

    return { femaleTeam, maleTeam };
  }

  getVictory() {
    const points = [10, 5, 4, 15, 10, 5];
    const combinations = [];

    function findCombo(points, target, start, current) {
      if (target === 0) {
        combinations.push(current.slice());
        return;
      }

      for (let i = start; i < points.length; i++) {
        if (points[i] <= target) {
          current.push(points[i]);
          findCombo(points, target - points[i], i + 1, current);
          current.pop();
        }
      }
    }

    findCombo(points, 35, 0, []);

    return combinations;
  }
}

let student1 = new Student("Topi", "Female");
let student2 = new Student("Robi", "Female");
let student3 = new Student("Marku", "Male");
let student4 = new Student("Farku", "Male");

let clRoom = new ClassRoom();
clRoom.addStudent(student1);
clRoom.addStudent(student2);
clRoom.addStudent(student3);
clRoom.addStudent(student4);

console.log(clRoom.getStudent());
console.log(clRoom.pickTeam());
console.log(clRoom.getVictory());
