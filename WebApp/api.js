document.addEventListener('DOMContentLoaded', function () {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/distritos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var distritos = '<button>API</button>';
            data.results.forEach(pokemon => {
                distritosList += ok;
            });
            distritosList += ok;
            document.getElementById('api').innerHTML = distritosList;
        })
        .catch(error => {
            document.getElementById('api').innerHTML = '<p>Ocorreu um erro ao carregar a lista de Distritos.</p>';
            console.error('Fetch error:', error);
        });
});
