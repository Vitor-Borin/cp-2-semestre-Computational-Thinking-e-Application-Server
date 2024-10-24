document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#userForm');
    const fetchButton = document.querySelector('#fetchButton');
    const clearButton = document.querySelector('#clearButton');
    const resultDiv = document.querySelector('#result');
    const userIdInput = document.querySelector('#userIdInput');

    function fetchUserData(userId) {
        fetchButton.disabled = true;
        fetchButton.textContent = 'Carregando...';

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Usuário não encontrado');
                }
                return response.json();
            })
            .then(data => {
                populateForm(data);
                displayJsonResult(data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
                alert(error.message);
                clearForm();
            })
            .finally(() => {
                fetchButton.disabled = false;
                fetchButton.textContent = 'Buscar Dados do Usuário';
            });
    }

    function populateForm(data) {
        document.querySelector('#id').value = data.id;
        document.querySelector('#name').value = data.name;
        document.querySelector('#username').value = data.username;
        document.querySelector('#email').value = data.email;
        document.querySelector('#address').value = formatAddress(data.address);
        document.querySelector('#phone').value = data.phone;
        document.querySelector('#website').value = data.website;
        document.querySelector('#company').value = formatCompany(data.company);
    }

    function formatAddress(address) {
        return `${address.street}, ${address.suite}
${address.city}, ${address.zipcode}
Lat: ${address.geo.lat}, Lng: ${address.geo.lng}`;
    }

    function formatCompany(company) {
        return `${company.name}
${company.catchPhrase}
${company.bs}`;
    }

    function displayJsonResult(data) {
        resultDiv.textContent = JSON.stringify(data, null, 2);
    }

    function clearForm() {
        form.reset();
        resultDiv.textContent = '';
    }

    fetchButton.addEventListener('click', function() {
        const userId = userIdInput.value;
        fetchUserData(userId);
    });

    clearButton.addEventListener('click', clearForm);

    clearForm();
});