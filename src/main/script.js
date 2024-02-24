const inserirTexto = document.querySelector('.inserirTexto');
const btn_criptografar = document.querySelector('#codificador');
const btn_decodificador = document.querySelector('#decoficador');
const btn_copiar_texto = document.querySelector('#copiar');
const texto_criptografado = document.querySelector('.texto_criptografado');
const btn_limpar_campo = document.querySelector('#limpar');

btn_criptografar.addEventListener('click', criptografarTexto);
btn_decodificador.addEventListener('click', descriptografarTexto);
btn_copiar_texto.addEventListener('click', copiar_Texto);
btn_limpar_campo.addEventListener('click', limpaCampo)


let matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];


function verificarCaractereEspecial() {
    var texto = inserirTexto.value
    var regex = /[!@#$%^&*(),.?":{}|<>/\s/\/[A-Z]/;

    if (regex.test(texto)) {
        alert('ATENÇÃO, Não pode conter caracteres especiais ou Letra Maiusculas!!!')
        return false;
    } else {
        alert('OK');
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

function criptografarTexto() {
    const texto = inserirTexto.value
    if (verificarCaractereEspecial(texto)) {
        const resultadoCriptografado = criptografar(texto);
        texto_criptografado.textContent = resultadoCriptografado
    }
}

function copiar_Texto() {
    navigator.clipboard.writeText(texto_criptografado.value);
    alert('Texto copiado')
}

function limpaCampo() {
    inserirTexto.value = ""
    texto_criptografado.textContent = ""
}

function descriptografar(string) {
    const resultado = string
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    return resultado;
}

function descriptografarTexto() {
    const texto = inserirTexto.value
    if (verificarCaractereEspecial(texto)) {
        const resultadoDescriptografado = descriptografar(texto);
        texto_criptografado.textContent = resultadoDescriptografado
    }
}