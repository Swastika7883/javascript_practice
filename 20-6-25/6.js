//6.  If-else: Write a function to determine the grade of a student based on their score.

function Grade(students) {
  for (let i = 0; i < students.length; i++) {
    let grade = "";

    if (students[i].marks >= 90) grade = "A";
    else if (students[i].marks >= 80) grade = "B";
    else if (students[i].marks >= 70) grade = "C";
    else if (students[i].marks >= 60) grade = "D";
    else grade = "F";

    
    if (students[i].marks > 90) {
      console.log(`${students[i].name} - Grade: ${grade}`);
    }
  }
}

let students = [
  { name: "Abha", marks: 92 },
  { name: "Aayush", marks: 85 },
  { name: "Ankita", marks: 97 },
  { name: "Dhruv", marks: 88 },
  { name: "Ritika", marks: 93 }
];


Grade(students);
