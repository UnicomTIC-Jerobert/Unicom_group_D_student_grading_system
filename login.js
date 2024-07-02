const users = JSON.parse(localStorage.getItem('users')) || [];

function encryptPassword(password) {
    return btoa(password);
}

// Login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let username = document.getElementById('loginUsername').value;
    // Here we encrypt the given password and then compare
    let password = encryptPassword(document.getElementById('loginPassword').value);

    let user = users.find(user => user.username === username && user.password === password);
   // console.log(user)

    if (user) {
        document.getElementById('loginMessage').textContent = "";
        if (user.role === 'student') {
            //alert("Redirecting to student page...");
            window.location.href = 'subject_selection.html';
        } else if (user.role === 'teacher') {
            alert("Redirecting to teacher page...");
            // Implement redirection or further actions for teacher
        } else if (user.role === 'staff') {
            alert("Redirecting to staff page...");
            // Implement redirection or further actions for staff
        }
    } else {
        document.getElementById('loginMessage').textContent = "Invalid username or password.";
    }
});
