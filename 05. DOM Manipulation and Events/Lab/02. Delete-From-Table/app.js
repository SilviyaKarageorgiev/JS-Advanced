function deleteByEmail() {

    let value = document.querySelector('input[name="email"]').value;

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    let found = false;
    for (let row of rows) {
        if (row.children[1].textContent == value) {
            let parent = row.parentElement;
            parent.removeChild(row);
            found = true;
        }
    }

    document.getElementById('result').textContent = found ? 'Deleted.' : 'Not found.';
}