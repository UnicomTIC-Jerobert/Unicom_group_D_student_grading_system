// Array to store students data
let students = [];
let mandatorySubjects = ["Math", "Science", "History", "Geography", "English", "Physical Education", "Tamil"];

// Display compulsory subjects on page load
document.addEventListener('DOMContentLoaded', displayCompulsorySubjects);

// Function to display compulsory subjects
/*
- Get 'compulsorySubjects' element from DOM.
- Clear contents of 'compulsorySubjects' list.
- For each subject in mandatorySubjects:
- Create a new list item with the subject as text content.
- Append the list item to 'compulsorySubjects' list.
*/
function displayCompulsorySubjects() {
    let compulsorySubjectsList = document.getElementById('compulsorySubjects');
    compulsorySubjectsList.innerHTML = ""; // Clear the list first
    mandatorySubjects.forEach(function (subject) {
        let listItem = document.createElement('li');    // <li></li>
        listItem.textContent = subject;                 // <li>Maths</li>
        compulsorySubjectsList.appendChild(listItem);   // <ul><li>Maths</li></ul>
    });
}

// Subject selection function
/*
- Combine basket1, basket2, basket3 with mandatorySubjects into selectedSubjects array.
- Find if student with studentId exists in students array.
- If student exists:
  - Update subjects property of student to selectedSubjects.
- If student does not exist:
  - Create new student object with id as studentId and subjects as selectedSubjects.
  - Push new student object to students array.
- Log updated students array.
- Return "Subjects selected successfully".
*/
function selectSubjects(studentId, basket1, basket2, basket3) {
    let selectedSubjects = [basket1, basket2, basket3].concat(mandatorySubjects);
    //console.log(selectedSubjects);
    let student = students.find(function (student) {
        return student.id === studentId
    });
    if (student) {
        student.subjects = selectedSubjects;
    } else {
        students.push({ id: studentId, subjects: selectedSubjects });
    }
    console.log(students);
    return "Subjects selected successfully";
}

// Form submission event handler
/*
Event Handler: onSubmit event of form with id 'subjectForm'
- Prevent default form submission.
- Get values of studentId, basket1, basket2, and basket3 from respective form elements.
- Call selectSubjects function with these values.
- Update text content of 'message' element to display returned message.
- Reset form to clear entered values.
*/
document.getElementById('subjectForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the default way

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
});



