document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('ordenarBtn').addEventListener('click', function () {
        const numeros = [5, 3, 8, 1, 4];
        const numerosOrdenados = ordenarDecrescente(numeros);
        const resultadoHTML = numerosOrdenados.join(', ');

        document.getElementById('numerosOrdenados').textContent = 'Números Ordenados: ' + resultadoHTML;
    });

    function ordenarDecrescente(array) {
        return array.sort(function (a, b) {
            return b - a;
        });
    }
});
