const storageKey = 'user_data';

const data = JSON.parse(localStorage.getItem(storageKey));

const nama = document.getElementById('nama');
const ambilnama = data.map((user) => user.daf_nama);
const listnama = ambilnama.map((nama) => `${nama}`);
nama.innerHTML = `${listnama.join('')}`;