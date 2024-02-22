const inserirTexto = document.querySelector('.inserirTexto');
const btn_copiar_texto = document.querySelector('.btn_copiar_texto');


btn_copiar_texto.addEventListener('click', verificarCaractereEspecial);

function verificarCaractereEspecial() {
    var regex = /[!@#$%^&*(),.?":{}|<>/\s/]/;

    if (regex.test(inserirTexto.value)) {
        alert('ATENÇÃO, Não pode conter caracteres especial!')
        return false;
    } else {
        alert('OK');
        return true;
    }
}