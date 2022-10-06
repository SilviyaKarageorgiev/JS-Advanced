function generateReport() {

    let header = Array.from(document.querySelectorAll('input'));
    let indexes = [];

    for (let el of header) {
        if (el.checked) {
            indexes.push(header.indexOf(el));
        }
    }

    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let result = [];

    for (let row of rows) {
        let obj = {};

        for (let index of indexes) {

            let propName = header[index].name;
            let propValue = row.children[index].textContent;
            obj[propName] = propValue;
        }

        result.push(obj);
    }

    let output = document.getElementById('output');
    output.textContent = JSON.stringify(result);
}