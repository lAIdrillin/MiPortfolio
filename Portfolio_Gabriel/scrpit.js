function mostrarMensaje(idParrafo){
const parrafo = document.getElementById(idParrafo);
parrafo.style.display = (parrafo.style.display === "none") ? "block" : "none";
}