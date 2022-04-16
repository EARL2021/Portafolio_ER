var nombre = document.getElementById("nombre")
var correo = document.getElementById("correo")
var asunto = document.getElementById("asunto")

var form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    if(nombre.value.length <= 0){
        alert("Nombre inválido")
    }
})