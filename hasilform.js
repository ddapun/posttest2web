const storageKey = 'user_form';

        const data = JSON.parse(sessionStorage.getItem(storageKey));

        const container = document.getElementById('form');
        const ul = document.createElement('ul');
        data.forEach((e) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <strong>Name:</strong> ${e.nama}<br>
        <strong>Email:</strong> ${e.email}<br>
        <strong>Class:</strong> ${e.kelas}<br>
        <strong>Device:</strong> ${e.device.join(', ')}<br>
        <strong>Gender:</strong> ${e.gender}<br>
        <strong>Reason:</strong> ${e.reason}<br>
        `;
        ul.appendChild(li);
        });
    container.appendChild(ul);