var indice = 0;
var imagenes = ["Docs/regalo.png", "Docs/caja-de-regalo.png"];

// Función para cambiar la imagen y alternar entre las dos imágenes
function cambiarImagen() {
    // Obtener el elemento de la imagen
    var miImagen = document.getElementById("miImagen");

    // Verificar si el índice es 0 (primera imagen)
    if (indice === 0) {
        // Ejecutar la función de confeti
        lanzarConfeti();
    }

    // Cambiar la imagen al siguiente índice en el array
    indice = (indice + 1) % imagenes.length;
    miImagen.src = imagenes[indice];
}

function lanzarConfeti() {
    // Utiliza la biblioteca de confeti.js para crear un efecto de confeti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}