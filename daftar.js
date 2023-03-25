const form = document.querySelector('form');


const storageKey = 'user_data';


function storeData(daf_nama, daf_email, daf_pass) {

const data = JSON.parse(localStorage.getItem(storageKey)) || [];


data.push({daf_nama, daf_email, daf_pass});

localStorage.setItem(storageKey, JSON.stringify(data));
}

form.addEventListener('submit', (event) => {
event.preventDefault();

const nama = form.daf_nama.value;
const email = form.daf_email.value;
const password = form.daf_pass.value;

storeData(nama, email, password);

alert('Registrasi berhasil!');
window.location.href = "index.html";

form.reset();
});