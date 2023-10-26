document.getElementById("formBooking").addEventListener("enviar", function(event){
    event.preventDefault();
    var nombre = document.getElementById("nombrePasajero").value;
    var apellido = document.getElementById("apellidoPasajero").value;

    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);

});

/* function passenger(){
    var namep = document.getElementById("").Value;

} */