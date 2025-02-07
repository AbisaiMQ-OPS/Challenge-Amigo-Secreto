// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear una lista para almacenar los nombres
let nombres = [];

// Crear una funcion para limpiar la caja de nombres
function limpiarCaja() {
    document.getElementById('amigo').value = "";
}

//Hacer una funcion que tome el nombre digitado lo almacene en la lista
function agregarAmigo() {
   let nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo === '') {
        alert('Necesitas agregar un nombre');
        return
    } else {
        //agregar el nombre a la lista
        nombres.push(nombreAmigo);
        limpiarCaja();
        recorrerAmigos();
        return;
    }
}

function recorrerAmigos() {
    // Obtener el elemento <ul> con el ID "listaAmigos"
    let lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista para evitar duplicados
    lista.innerHTML = "";

    // Recorrer el array de nombres
    for (let i = 0; i < nombres.length; i++) {
        // Crear un nuevo elemento <li>
        let li = document.createElement('li');
        // Establecer el contenido del <li> con el nombre
        li.textContent = nombres[i];
        // Agregar el <li> a la lista
        lista.appendChild(li);
    }}


function sortearAmigo() {
//Generar numero aleatorio

if (nombres.length == 0) { 
    alert('Aun no has agregado ningun nombre a la lista');
    return;
} else {
    let numeroAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSorteado = nombres[numeroAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    nombres = [];
    document.getElementById('listaAmigos'). innerHTML = "";
}
}