function validate() {

    let input = document.getElementById('email');
    input.addEventListener('change', check);

    function check(ev) {
        let text = ev.target.value;
        let regex = /[a-z]+@[a-z]+\.[a-z]+/;

        if (!regex.test(text)) {
            ev.target.className = 'error';
        } else {
            ev.target.className = '';
        }
    }
}