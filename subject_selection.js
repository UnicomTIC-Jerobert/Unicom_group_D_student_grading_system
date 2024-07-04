// Array to store students data
let students = [
    // {
    //     id: 'UT01234',
    //     subjects: ["Music", "Math", "Science", "History", "Geography", "English", "Physical Education", "Tamil"]
    // }
];
let mandatorySubjects = ["Math", "Science", "History", "Geography", "English", "Physical Education", "Tamil"];

// Display compulsory subjects on page load
document.addEventListener('DOMContentLoaded', displayCompulsorySubjects);

// Function to display compulsory subjects
function displayCompulsorySubjects(event) {
    //console.log(event)
    let compulsorySubjectsList = document.getElementById('compulsorySubjects');
    console.log(compulsorySubjectsList)
    compulsorySubjectsList.innerHTML = ""; // Clear the list first

    //mandatorySubjects.forEach(createList);

    for (let i = 0; i < mandatorySubjects.length; i = i + 1) {
        createList(mandatorySubjects[i]);
    }

    //createList("tamil");
    function createList(subject) {
        let listItem = document.createElement('li');    // <li></li>
        listItem.textContent = subject;                 // <li>Maths</li>
        compulsorySubjectsList.appendChild(listItem);   // <ul><li>Maths</li></ul>
    }
}

// Subject selection function
function selectSubjects(studentId, basket1, basket2, basket3) {
    let selectedSubjects = [basket1, basket2, basket3].concat(mandatorySubjects);
    //console.log(selectedSubjects);
    let foundStudent = students.find(findStudent);

    // for (let i = 0; i < students.length; i = i + 1) {
    //     findStudent(students[i]);
    // }

    function findStudent(student) {
        return student.id === studentId
    }

    if (foundStudent) {
        foundStudent.subjects = selectedSubjects;
    } else {
        students.push({ id: studentId, subjects: selectedSubjects });
    }
    console.log(students);
    return "Subjects selected successfully";
}

// Form submission event handler
document.getElementById('subjectForm').addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault(); // Prevent form from submitting the default way

   // alert("test");

    // Get form values
    let studentId = document.getElementById('studentId').value;
    let basket1 = document.getElementById('basket1').value;
    let basket2 = document.getElementById('basket2').value;
    let basket3 = document.getElementById('basket3').value;

    // Select subjects and display message
    let message = selectSubjects(studentId, basket1, basket2, basket3);
    document.getElementById('message').textContent = message;

    // Clear the form
    event.target.reset();
}

