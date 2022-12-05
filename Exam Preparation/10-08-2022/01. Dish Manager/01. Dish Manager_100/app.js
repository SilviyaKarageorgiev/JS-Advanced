window.addEventListener("load", solve);

function solve() {

    const input = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        age: document.getElementById('age'),
        gender: document.getElementById('genderSelect'),
        description: document.getElementById('task')
    };

    const lists = {
        inProgress: document.getElementById('in-progress'),
        finished: document.getElementById('finished')
    };

    document.getElementById('form-btn').addEventListener('click', submit);
    document.getElementById('clear-btn').addEventListener('click', clear);

    function submit(event) {
        event.preventDefault();

        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const age = input.age.value;
        const gender = input.gender.value;
        const description = input.description.value;

        if (firstName == '' || lastName == '' || age == '' || gender == '' || description == '') {
            return;
        }

        const li = document.createElement('li');
        li.className = 'each-line';
        li.innerHTML = `<article>
        <h4>${firstName} ${lastName}</h4>
        <p>${gender}, ${age}</p>
        <p>Dish description: ${description}</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="complete-btn">Mark as complete</button>`;

        const editBtn = li.querySelector('.edit-btn');
        const completeBtn = li.querySelector('.complete-btn');

        editBtn.addEventListener('click', edit);
        completeBtn.addEventListener('click', complete);

        lists.inProgress.appendChild(li);

        input.firstName.value = '';
        input.lastName.value = '';
        input.age.value = '';
        input.gender.value = 'Male';
        input.description.value = '';

        let counter = document.getElementById('progress-count');
        counter.textContent = Number(counter.textContent) + 1;

        function edit() {
            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.age.value = age;
            input.gender.value = gender;
            input.description.value = description;

            li.remove();

            counter.textContent = Number(counter.textContent) - 1;
        }

        function complete() {
            lists.finished.appendChild(li);

            editBtn.remove();
            completeBtn.remove();

            counter.textContent = Number(counter.textContent) - 1;
        }

    }

    function clear() {
        lists.finished.innerHTML = '';
    }

}

