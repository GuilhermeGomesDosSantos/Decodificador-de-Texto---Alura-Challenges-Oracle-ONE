const inserirTexto = document.querySelector('.inserirTexto');
const btn_criptografar = document.querySelector('#codificador');
const btn_decodificador = document.querySelector('#decoficador');
const btn_copiar_texto = document.querySelector('#copiar');
const texto_criptografado = document.querySelector('.texto_criptografado');
const btn_limpar_campo = document.querySelector('#limpar');

btn_copiar_texto.disabled = true;
btn_limpar_campo.disabled = true;

btn_criptografar.addEventListener('click', criptografarTexto);
btn_decodificador.addEventListener('click', descriptografarTexto);
btn_copiar_texto.addEventListener('click', copiarTexto);
btn_limpar_campo.addEventListener('click', limparCampo);

// function verificarCaractereEspecial() {
//     var texto = inserirTexto.value
//     var regex = /[!@#$%^&*(),.?":{}|<>/\s/\/[A-Z]/;

//     if (regex.test(texto)) {
//         alert('ATENÇÃO, Não pode conter caracteres especiais ou Letra Maiusculas!!!')
//         return false;
//     } else {
//         alert('OK');
//         return true;
//     }
// }

function verificarCaractereEspecial() {
    var texto = inserirTexto.value.trim();

    if (texto === "") {
        btn_copiar_texto.style.display = 'none';
        btn_limpar_campo.style.display = 'none';
        return false;
    } else {
        btn_copiar_texto.style.display = 'inline-block';
        btn_limpar_campo.style.display = 'inline-block';
    }

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
        texto_criptografado.textContent = resultadoCriptografado;

        btn_copiar_texto.disabled = false;
        btn_limpar_campo.disabled = false;
    }
}

function copiarTexto() {
    navigator.clipboard.writeText(texto_criptografado.textContent);
}

function limparCampo() {
    inserirTexto.value = "";
    texto_criptografado.textContent = "";

    btn_copiar_texto.style.display = 'none';
    btn_limpar_campo.style.display = 'none';
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
        texto_criptografado.textContent = resultadoDescriptografado;

        btn_copiar_texto.disabled = false;
        btn_limpar_campo.disabled = false;
    }
}

