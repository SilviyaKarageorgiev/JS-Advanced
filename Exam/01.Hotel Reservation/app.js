window.addEventListener('load', solve);

function solve() {

    const input = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        checkInDate: document.getElementById('date-in'),
        checkOutDate: document.getElementById('date-out'),
        guests: document.getElementById('people-count')
    };

    const lists = {
        inProgress: document.querySelector('.info-list'),
        finished: document.querySelector('.confirm-list')
    };

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', submit);

    function submit(event) {
        event.preventDefault();

        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const checkInDate = input.checkInDate.value;
        const checkOutDate = input.checkOutDate.value;
        const guests = input.guests.value;

        if (firstName == '' || lastName == '' || checkInDate == ''
            || checkOutDate == '' || guests == '') {
            return;
        }

        const li = document.createElement('li');
        li.className = 'reservation-content';
        li.innerHTML = `<article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${checkInDate}</p>
        <p>To date: ${checkOutDate}</p>
        <p>For ${guests} people</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>`;

        const editBtn = li.querySelector('.edit-btn');
        const continueBtn = li.querySelector('.continue-btn');

        editBtn.addEventListener('click', edit);
        continueBtn.addEventListener('click', continues);

        lists.inProgress.appendChild(li);

        input.firstName.value = '';
        input.lastName.value = '';
        input.checkInDate.value = '';
        input.checkOutDate.value = '';
        input.guests.value = '';

        nextBtn.disabled = true;

        function edit() {
            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.checkInDate.value = checkInDate;
            input.checkOutDate.value = checkOutDate;
            input.guests.value = guests;

            li.remove();
            nextBtn.disabled = false;

        }

        const result = document.getElementById('verification');

        function continues() {
            lists.finished.appendChild(li);

            editBtn.remove();
            continueBtn.remove();

            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn';
            confirmBtn.textContent = 'Confirm';

            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';

            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn);

            confirmBtn.addEventListener('click', () => {
                result.textContent = 'Confirmed.';
                result.className = 'reservation-confirmed';

                li.remove();
                nextBtn.disabled = false;
                confirmBtn.remove();
                cancelBtn.remove();
            });

            cancelBtn.addEventListener('click', () => {
                result.textContent = 'Cancelled.';
                result.className = 'reservation-cancelled';

                li.remove();
                nextBtn.disabled = false;
                confirmBtn.remove();
                cancelBtn.remove();
            });

        }

    }

}