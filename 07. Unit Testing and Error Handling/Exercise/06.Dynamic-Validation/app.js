function validate() {

    let element = document.getElementById('email');
    const pattern = /^([a-z]+@{1}[a-z]+\.{1}[a-z]+)$/gm;

    element.addEventListener('change', (e) => {
        
        if (pattern.test(e.target.value)) {
            e.currentTarget.removeAttribute('class');
        } else {
            e.currentTarget.classList.add('error');
        }
    });
}