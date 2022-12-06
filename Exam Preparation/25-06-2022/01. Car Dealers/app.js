window.addEventListener("load", solve);

function solve() {

    const input = {
        make: document.getElementById('make'),
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        fuel: document.getElementById('fuel'),
        originalCost: document.getElementById('original-cost'),
        sellingPrice: document.getElementById('selling-price')
    };

    const lists = {
        tableBody: document.getElementById('table-body'),
        soldCars: document.getElementById('cars-list')
    };

    document.getElementById('publish').addEventListener('click', publish);

    function publish(event) {
        event.preventDefault();

        let make = input.make.value;
        let model = input.model.value;
        let year = input.year.value;
        let fuel = input.fuel.value;
        let originalCost = input.originalCost.value;
        let sellingPrice = input.sellingPrice.value;

        if (make == '' || model == '' || originalCost == '' || sellingPrice == ''
            || year == '' || fuel == '' ||sellingPrice < originalCost) {
            return;
        }

        const tr = document.createElement('tr');
        tr.className = 'row';
        tr.innerHTML = `<td>${make}</td>
                        <td>${model}</td>
                        <td>${year}</td>
                        <td>${fuel}</td>
                        <td>${originalCost}</td>
                        <td>${sellingPrice}</td>
                        <td>
                            <button class="action-btn edit">Edit</button>
                            <button class="action-btn sell">Sell</button>
                        </td>`;

        const editBtn = tr.querySelector('.edit');
        const sellBtn = tr.querySelector('.sell');

        editBtn.addEventListener('click', edit);
        sellBtn.addEventListener('click', sell);

        lists.tableBody.appendChild(tr);

        input.make.value = '';
        input.model.value = '';
        input.year.value = '';
        input.fuel.value = '';
        input.originalCost.value = '';
        input.sellingPrice.value = '';

        function edit() {
            input.make.value = make;
            input.model.value = model;
            input.year.value = year;
            input.fuel.value = fuel;
            input.originalCost.value = originalCost;
            input.sellingPrice.value = sellingPrice;

            tr.remove();
        }

        let profitMade = document.getElementById('profit');


        function sell() {

            let profit = Number(sellingPrice) - Number(originalCost);

            const li = document.createElement('li');
            li.className = 'each-list';
            li.innerHTML = `<span>${make} ${model}</span>
                            <span>${year}</span>
                            <span>${profit}</span>`;

            lists.soldCars.appendChild(li);
            tr.remove();

            profitMade.textContent = (Number(profitMade.textContent) + profit).toFixed(2);
        }

    }

}
