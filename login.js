const form = document.querySelector('form');


const storageKey = 'user_data';


function login(email, pass) {

const data = JSON.parse(localStorage.getItem(storageKey));


const user = data.find((user) => user.daf_email === email && user.daf_pass === pass);


if (user) {
    alert('Login berhasil!');
    window.location.href = "home.html";
} else {
    alert('Username atau password salah!');
}
}


form.addEventListener('submit', (event) => {
event.preventDefault();


const email = form.email.value;
const pass = form.pass.value;


login(email, pass);

form.reset();
});