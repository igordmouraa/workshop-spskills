document.getElementById('calculate').addEventListener('click', function() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    function somaArray() {
        let soma = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                soma += array[i] * array[i];
            }
        }
        return soma;
    }

    const resultado = somaArray();
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
});
