const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById('mensaje');
const warning = document.getElementById('warning');

var form = document.getElementById("form")

form.addEventListener("submit", e=>{
    let mensajeError = []
    
    if((nombre.value.length <= 0 || nombre.value.length > 50)){
        nombre.style.border = "1px solid red";
        mensajeError.push('Nombre NO válido.')
    }

    emailRegx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!(emailRegx.test(correo.value))){
        correo.style.border = "1px solid red";
        mensajeError.push('Correo NO válido.')
    }

    if((asunto.value.length <= 0 || asunto.value.length > 50)){
        asunto.style.border = "1px solid red";
        mensajeError.push('Asunto no puede estar vacío.')
    }
    if((mensaje.value.length <= 0 || mensaje.value.length > 300)){
        mensaje.style.border = "1px solid red";
        mensajeError.push('Mensaje no puede estar vacío.')
    }

    if(mensajeError.length > 0){
        e.preventDefault()
        warning.innerText = mensajeError.join(' ')
    }
})