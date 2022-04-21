const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById('mensaje');

var form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    if(nombre.value.length <= 0){
        nombre.style.border = "1px solid red";
    }

    if(correo.value.length <= 0){
        correo.style.border = "1px solid red";
    }

    if(asunto.value.length <= 0){
        asunto.style.border = "1px solid red";
    }
    if(mensaje.value.length <= 0){
        mensaje.style.border = "1px solid red";
    }
})