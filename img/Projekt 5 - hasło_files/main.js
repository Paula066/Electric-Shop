const input = document.querySelector('input');
const passwords = ["Jeden", "DWa"];
const messages = ["Super", "dziala"];
const div = document.querySelector('div');

const passLower = passwords.map(w => w.toLowerCase());
const messLower = messages.map(w => w.toLowerCase());

const showMessage = (e) => {

    const text = e.target.value;
    passwords.forEach((password, index) => {
        if (text === password) {
            div.textContent = messages[index];
        }
    })
}

input.addEventListener('input', showMessage)