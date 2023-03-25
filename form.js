const form = document.querySelector('form');


const storageKey = 'user_form';


function storeData(nama, email, kelas, device, gender, reason) {

const data = JSON.parse(sessionStorage.getItem(storageKey)) || [];


data.push({nama, email, kelas, device, gender, reason});

sessionStorage.setItem(storageKey, JSON.stringify(data));
}

form.addEventListener('submit', (event) => {
event.preventDefault();

const nama = form.nama.value;
const email = form.email.value;
const kelas = form.elements.division.value;
const device = Array.from(form.querySelectorAll('input[name="device"]:checked')).map((input) => input.value);
const gender = form.elements.gender.value;
const reason = form.alasan.value;

storeData(nama, email, kelas, device, gender, reason);

alert('Registrasi berhasil!');
window.location.href = "hasilform.html"

form.reset();
});