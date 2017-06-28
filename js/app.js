var estudiantes = [];


function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre  = prompt("Ingrese nombre de la estudiante: ");
    var puntosTecnico = prompt("Cantidad de Puntos Tenicos");
    var puntosHES = prompt("Ingrese Porcentaje de Habilidades Socio - Emocionales");
    var estudiante = {
        nombre : nombre,
        puntosTecnico : puntosTecnico,
        puntosHES : puntosHES
    };
    estudiantes.push(estudiante);
    return estudiantes;
}

function mostrar(estudiantes) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var indiceUltimo = estudiantes.length - 1;
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiantes[indiceUltimo].nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[indiceUltimo].puntosTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[indiceUltimo].puntosHES + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes    
    var resultado = "";
    for(var i in estudiantes){
        resultado += "<div class='row'>";
        resultado += "<div class='col m12'>";
        resultado += "<div class='card blue-grey darken-1'>";
        resultado += "<div class='card-content white-text'>";
        resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre + "</p>";
        resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].puntosTecnico + "</p>";
        resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].puntosHES + "</p>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
    }
    return resultado;
    
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var filtrarNombre = estudiantes.filter(function(i){
        return nombre.toLowerCase() == i.nombre.toLowerCase();
    });
    return filtrarNombre;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    return estudiantes.sort(
        function(a,b){
            //console.log(b.puntosTecnico + "-" +a.puntosTecnico)
            return b.puntosTecnico - a.puntosTecnico;
        }
    );

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return estudiantes.sort(
        function(a,b){
            //console.log(b.puntosTecnico + "-" +a.puntosTecnico)
            return b.puntosHES - a.puntosHES;
        }
    );
}