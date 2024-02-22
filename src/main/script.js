const inserirTexto = document.querySelector('.inserirTexto');
const btn_criptografar = document.querySelector('.btn_criptografar');


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
