window.addEventListener("load", solve);

function solve(e) {

    e.preventDefault();

    let submitBtn = document.getElementById('form-btn');

    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let age = document.getElementById('age');
    let gender = document.getElementById('genderSelect');
    let description = document.getElementById('task');


    submitBtn.addEventListener('click', () => {

        if (firstName.value == '' || lastName.value == '' || age.value == ''
            || gender.value == '' || description.value == '') {

            return;
        }

        let inProgressUl = document.getElementById('in-progress');

        let li = document.createElement('li');
        li.setAttribute('class', 'each-line');

        let article = document.createElement('article');
        let h4 = document.createElement('h4');
        let pGenderAge = document.createElement('p');
        let pDescription = document.createElement('p');

        h4.textContent = firstName.value + ' ' + lastName.value;
        article.appendChild(h4);

        pGenderAge.textContent = gender.value + ', ' + age.value;
        article.appendChild(pGenderAge);

        pDescription.textContent = 'Dish description:' + ' ' + description.value;
        article.appendChild(pDescription);

        li.appendChild(article);

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let completeBtn = document.createElement('button');
        completeBtn.setAttribute('class', 'complete-btn');
        completeBtn.textContent = 'Mark as complete';

        li.appendChild(editBtn);
        li.appendChild(completeBtn);

        inProgressUl.appendChild(li);

        let counter = document.getElementById('progress-count');
        counter.textContent = Number(counter.textContent) + 1;

        firstName.value = '';
        lastName.value = '';
        age.value = '';
        gender.value = 'Male';
        description.value = '';

        editBtn.addEventListener('click', () => {

            firstName.value = h4.textContent.split(' ')[0];
            lastName.value = h4.textContent.split(' ')[1];
            age.value = pGenderAge.textContent.split(', ')[1];
            gender.value = pGenderAge.textContent.split(', ')[0];
            description.value = pDescription.textContent.split(': ')[1];

            inProgressUl.removeChild(li);

            counter.textContent = Number(counter.textContent) - 1;

        });

        completeBtn.addEventListener('click', () => {

            let finishedUl = document.getElementById('finished');

            finishedUl.appendChild(li);
            li.removeChild(editBtn);
            li.removeChild(completeBtn);

            counter.textContent = Number(counter.textContent) - 1;

            let clearBtn = document.getElementById('clear-btn');

            clearBtn.addEventListener('click', () => {
    
                console.log('clicked');
                finishedUl.innerHTML = '';
            });

        });

    });

    let finishedUl = document.getElementById('finished');


    // if (finishedUl.innerHTML != '') {


       
    // }



}
