function limpiar() {
    document.getElementById('Correo').value = ""
    document.getElementById('Nombre').value = ""
    document.getElementById('Apellidos').value = ""
    document.getElementById('Edad').value = ""
    document.getElementById('Profesion').value = ""
}

function procesar() { 
    event.preventDefault();
    Correo = document.getElementById("Correo").value;
    Nombre = document.getElementById("Nombre").value;
    Apellidos = document.getElementById("Apellidos").value;
    Edad = document.getElementById("Edad").value;
    Profesion = document.getElementById("Profesion").value;

    if (Nombre == "") {
        alert ("Usuario Vacío")
    } else {
        alert ("Correo: " + Correo + "\n" + "Nombre: " + Nombre + "\n" + "Apellidos: " + Apellidos + "\n" + "Teléfono: " + Edad + "\n" + "Respuesta: " + Profesion)

}
}