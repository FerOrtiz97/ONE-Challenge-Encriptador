const textoEncriptar = document.getElementById("text-input");
const mensaje = document.getElementById("message");
const copiarBtn = document.getElementById("copy");
const mensajeBusqueda = document.getElementById("mensaje-busqueda");
const mensajeIngresaTexto = document.getElementById("mensaje-ingresa-texto");
const textoCopiado = document.getElementById("texto-copiado");

copiarBtn.style.display = "none";
textoCopiado.style.display = "none";

function validarTexto() {
    let textoEscrito = textoEncriptar.value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);
    
    if (!validador) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return false;
    }
    return true;
}

function btnEncriptar() {
    if (validarTexto()) {
        const textoEncriptado = encriptar(textoEncriptar.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textoEncriptar.value = "";
        copiarBtn.style.display = "block";
        mensajeBusqueda.style.display = "none";
        mensajeIngresaTexto.style.display = "none";
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replace(new RegExp(matrizCodigo[i][0], 'g'), matrizCodigo[i][1]);
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    if (validarTexto()) {
        const textoDesencriptado = desencriptar(textoEncriptar.value);
        mensaje.value = textoDesencriptado;
        mensaje.style.backgroundImage = "none";
        textoEncriptar.value = "";
        copiarBtn.style.display = "block";
        mensajeBusqueda.style.display = "none";
        mensajeIngresaTexto.style.display = "none";
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replace(new RegExp(matrizCodigo[i][1], 'g'), matrizCodigo[i][0]);
    }
    return stringDesencriptada;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    textoCopiado.style.display = "block";
    copiarBtn.classList.add("hidden");
    
    alert("Texto Copiado");
    
    setTimeout(() => {
        textoCopiado.style.display = "none";
        copiarBtn.classList.remove("hidden");
        copiarBtn.classList.add("visible");
    }, 0);
}


