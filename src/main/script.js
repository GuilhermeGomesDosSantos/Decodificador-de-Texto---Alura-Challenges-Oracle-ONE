const inserirTexto = document.querySelector('.inserirTexto');
const btn_criptografar = document.querySelector('.btn_criptografar');
const btn_copiar_texto = document.querySelector('.btn_copiar_texto');
const texto_criptografado = document.querySelector('.texto_criptografado');


btn_criptografar.addEventListener('click', verificarCaractereEspecial);
btn_copiar_texto.addEventListener('click', copiar_Texto);


let matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];


function verificarCaractereEspecial() {
    var texto = inserirTexto.value
    var regex = /[!@#$%^&*(),.?":{}|<>/\s/]/;

    if (regex.test(texto.value)) {
        alert('ATENÇÃO, Não pode conter caracteres especial!')
        return false;
    } else {
        alert('OK');
        texto_criptografado.innerHTML = criptografar(texto)
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

function copiar_Texto () {
    navigator.clipboard.writeText(texto_criptografado.value);
    console.log('texto copiado');
}
