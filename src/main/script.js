const inserirTexto = document.querySelector('.inserirTexto');
const btn_criptografar = document.querySelector('.btn_criptografar');
const btn_copiar_texto = document.querySelector('.btn_copiar_texto');
const copiar_texto = document.querySelector('.copiar_texto');


btn_criptografar.addEventListener('click', verificarCaractereEspecial);

let matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];


function verificarCaractereEspecial() {
    var regex = /[!@#$%^&*(),.?":{}|<>/\s/]/;

    if (regex.test(inserirTexto.value)) {
        alert('ATENÇÃO, Não pode conter caracteres especial!')
        return false;
    } else {
        alert('OK');
        copiar_texto.innerHTML = criptografar(inserirTexto.value)
        console.log(criptografar(inserirTexto.value))
        return true;
    }
}

function criptografar(string) {
    const resultado = string
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    return resultado;
}
