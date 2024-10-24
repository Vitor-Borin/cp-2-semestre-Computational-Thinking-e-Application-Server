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
});