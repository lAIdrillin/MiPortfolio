function mostrarMensaje(idParrafo){
const parrafo = document.getElementById(idParrafo);
parrafo.style.display = (parrafo.style.display === "none") ? "block" : "none";
}
function verDetalle(proyecto){
    document.querySelector('.bloques').style.display = 'none';
    const detalleDiv = document.getElementById('detalle-proyecto');
    detalleDiv.className ="detalle-proyecto-contenido";
    detalleDiv.style.display = 'block';

    let contenido = '';
    if(proyecto === 'memorion') {
        contenido = `
       <h2>Memorion</h2>
       <p>Menu de inicio</p>
      <img src="images/juego_inicio.png" alt="Cartas" class="img-bloque">
      <p>historial</p>
      <img src="images/juego_historial.png" alt="Cartas" class="img-bloque">
      <p>Records</p>
      <img src="images/juego_records.png" alt="Cartas" class="img-bloque">
      <p>Tablero</p>
      <img src="images/juego_tablero.png" alt="Cartas" class="img-bloque">
    `;
    } else if (proyecto === 'calculadora'){
        contenido = `
        <h2>CalculadoraIp</h2>
         <p>Menu de inicio</p>
        <img src="images/calculadora_inicio.png" alt="calculadora" class="img-bloque">
        <p>Detalles de una ip</p>
        <img src="images/calculadora.png" alt="calculadora" class="img-bloque">
        `;
    } else if(proyecto === 'appmaps') {
        contenido = `
        <h2>AppMaps</h2>
        <p>Menu de inicio</p>
        <img src="images/mapa1.png" alt="Mapa" class="img-bloque">
        <p>Ejemplo mapa con marcadores en Madrid</p>
        <img src="images/mapa2.png" alt="Mapa" class="img-bloque">
        <p>Detector de terremotos</p>
        <img src="images/terremoto.png" alt="Mapa" class="img-bloque">
        `;
    }
detalleDiv.innerHTML = contenido;
    }
function volverAProyectos(){
    document.getElementById('detalle-proyecto').style.display = 'none';
    document.querySelector('.bloques').style.display = 'flex';
}



