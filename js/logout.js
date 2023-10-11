const content = document.querySelector('.content p');
const submitButton = document.querySelector('.submit');
const data = JSON.parse(localStorage.getItem('data'));

if (!data) {
    window.location.assign('index.html');
}

let email = data[0];

content.textContent = `Hello, ${email}`;

submitButton.addEventListener('click', () => {

localStorage.removeItem('data');

window.location.assign('index.html');

window.localStorage.setItem('data', JSON.stringify(data));

});
























