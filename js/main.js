// Encontra o elemento de textarea e o contador de caracteres
var mensagem = document.getElementById('mensagem');
var contadorCaracteres = document.getElementById('contador-caracteres');

// Define o limite máximo de caracteres
var limiteCaracteres = 1000;

// Atualiza o contador de caracteres enquanto digita
mensagem.addEventListener('input', function() {
    var caracteresRestantes = limiteCaracteres - mensagem.value.length;
    contadorCaracteres.textContent = caracteresRestantes + ' caracteres restantes';

    // Limita o tamanho do texto no campo de mensagem
    if (mensagem.value.length > limiteCaracteres) {
        mensagem.value = mensagem.value.slice(0, limiteCaracteres);
        contadorCaracteres.textContent = '0 caracteres restantes';
    }
});
