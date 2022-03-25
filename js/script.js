function Encriptar() {
    const encriptar = document.getElementById("textoIngresar").value;

    const textoEntrada = encriptar
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("textoSalida").value = textoEntrada;
    document.getElementById("textoIngresar").value = "";

}

function Desencriptar() {
    const desencriptar = document.getElementById("textoSalida").value;

    const textoSalida = desencriptar
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/enter/gi, "u");
    document.getElementById("textoIngresar").value = textoSalida;
    document.getElementById("textoSalida").value = "";
}

document.querySelector("#btnCopiar").addEventListener("click", () => {
    document.getElementById('textoSalida').select();
    document.execCommand('copy')
})