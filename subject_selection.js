const subjects = {
    mandatory: ['Math', 'Science', 'English', 'History', 'Geography', 'PE'],
    basket: {
        Basket1: ['Art', 'Music', 'Drama'],
        Basket2: ['Biology', 'Chemistry', 'Physics'],
        Basket3: ['Economics', 'Business Studies', 'Accounting']
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // List mandory subject
    const mandatorySubjectsUl = document.getElementById('mandatorySubjects');
    
    subjects.mandatory.forEach(subject => {
        const li = document.createElement('li');    //<li></li>
        li.textContent = subject;                   //<li>Maths</li>
        mandatorySubjectsUl.appendChild(li);
    });

    const basketSubjectsDiv = document.getElementById('basketSubjects');
    for (const basketKey in subjects.basket) {
        const select = document.createElement('select');        //<select></select>
        select.id = basketKey;                                  //<select id="Basket1"></select>
        select.required = true;                                 //<select id="Basket1" required=true></select>

        const defaultOption = document.createElement('option');     //<option></option>
        defaultOption.value = '';                                                   //<option value=''></option>
        defaultOption.textContent = `Select ${basketKey}`; // string interpolation  <option value=''>Select Basket1</option>
        select.appendChild(defaultOption);

        subjects.basket[basketKey].forEach(subject => {
            const option = document.createElement('option');        //<option></option>
            option.value = subject;                                 //<option value='Art'></option>
            option.textContent = subject;                           //<option value='Art'>Art</option>
            select.appendChild(option);
        });

        basketSubjectsDiv.appendChild(select);
    }

    document.getElementById('subjectSelectionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const basketSelections = {};
        for (const basket in subjects.basket) {
            const selection = document.getElementById(basket).value;
            if (!selection) {
                document.getElementById('message').textContent = 'Please select all basket subjects.';
                return;
            }
            basketSelections[basket] = selection;
        }

        const username = sessionStorage.getItem('loggedInUser');
        let users = JSON.parse(localStorage.getItem('users'));
        const userIndex = users.findIndex(user => user.username === username);
        if (userIndex !== -1) {
            users[userIndex].subjects = {
                mandatory: subjects.mandatory,
                basket: basketSelections
            };
            localStorage.setItem('users', JSON.stringify(users));
            document.getElementById('message').textContent = 'Subjects selected successfully.';
            setTimeout(() => {
                window.location.href = 'display_grades.html';
            }, 1000);
        }
    });

});
