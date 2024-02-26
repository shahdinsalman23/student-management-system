import inquirer from "inquirer";
let students = [
    { name: "Shahdin" },
    { name: "Irfan" },
];
let teachers = [{ name: "Sir Ali", experience: 10, school: "The city school" }];
let courses = ['Programming'];
let newwstudents = []; // Array to store new students
async function main(students) {
    do {
        const check = await inquirer.prompt({
            name: "check2",
            type: "list",
            message: "What you want to do?",
            choices: ['Log In', 'Create new Student']
        });
        if (check.check2 == 'Log In') {
            const check3 = await inquirer.prompt({
                name: "check4",
                type: "input",
                message: "Enter name:",
            });
            const enteredName = check3.check4;
            const isNameValidExisting = students.some(student => student.name === enteredName);
            const isNameValidNew = newwstudents.some(student => student.name === enteredName);
            if (isNameValidExisting || isNameValidNew) {
                console.log("Log in successful!");
                const todo = await inquirer.prompt({
                    name: "q1",
                    type: "list",
                    message: "What do you want to do",
                    choices: ['View Teacher', 'View Courses', 'View Students']
                });
                if (todo.q1 === 'View Teacher') {
                    console.log(teachers);
                }
                if (todo.q1 === 'View Courses') {
                    console.log(courses);
                }
                if (todo.q1 === 'View Students') {
                    console.log(students.concat(newwstudents));
                }
            }
            else {
                console.log("Invalid name.");
            }
        }
        if (check.check2 == 'Create new Student') {
            let newStudent = await inquirer.prompt({
                type: "input",
                name: "newStudentName",
                message: "Enter your name:"
            });
            // Create a new student object
            const newStudentObject = { name: newStudent.newStudentName };
            // Push the new student to the newwstudents array
            newwstudents.push(newStudentObject);
            console.log("New student added!");
        }
    } while (true);
}
main(students);
