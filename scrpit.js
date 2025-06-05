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
       <h3>Descripcion</h3>
       <p>Juego de cartas tipo memory donde el objetivo es encontrar todas las parejas en el
       menor tiempo posible. Desarrollado con HTML, CSS y JavaScript, incluye diferentes
       niveles de dificultad, cronómetro, sistema de puntuación y una tabla con un record</p>
  <div class="img-superpuesta">
    <img src="imagenes/juego_inicio.png" alt="Cartas" class="img-bloque">
    <span class="texto-superpuesto">Menu de inicio</span>
  </div>
  <div class="img-superpuesta">
    <img src="imagenes/juego_historial.png" alt="Cartas" class="img-bloque">
    <span class="texto-superpuesto">Historial</span>
  </div>
  <div class="img-superpuesta">
    <img src="imagenes/juego_records.png" alt="Cartas" class="img-bloque">
    <span class="texto-superpuesto">Records</span>
  </div>
  <div class="img-superpuesta">
    <img src="imagenes/juego_tablero.png" alt="Cartas" class="img-bloque">
    <span class="texto-superpuesto">Tablero</span>
  </div>
  <a href="https://laidrillin.github.io/juego-mesa/" target="_blank" class="btn-probar">Probar</a>
  <button onclick="volverAProyectos()">Volver</button>
    `;
    } else if (proyecto === 'calculadora'){
        contenido = `
        <h2>CalculadoraIp</h2>
        <h3>Descripcion</h3>
        <p>Calculadora de direcciones IP que permite obtener datos como la dirección de red,
        broadcast, máscara de subred, número de hosts y clase de red a partir de una IP y su
        máscara. Desarrollada con HTML, CSS y JavaScript.</p>
  <div class="img-superpuesta">
    <img src="imagenes/calculadora_inicio.png" alt="calculadora" class="img-bloque">
    <span class="texto-superpuesto">Menu de inicio</span>
  </div>
  <div class="img-superpuesta">
    <img src="imagenes/calculadora.png" alt="calculadora" class="img-bloque">
    <span class="texto-superpuesto">Detalles de una ip</span>
  </div>
  <a href="https://laidrillin.github.io/CalculaRedes/" target="_blank" class="btn-probar">Probar</a>
  <button onclick="volverAProyectos()">Volver</button>
        `;
    } else if(proyecto === 'appmaps') {
        contenido = `
        <h2>AppMaps</h2>
        <h3>Descripcion</h3>
        <p>Aplicación de mapas interactiva que permite al usuario añadir marcadores
        personalizados en distintas ubicaciones y una opcion para detectar si hubo 
        algun terremoto cerca o dentro de la peninsula iberica.Desarrollada con 
        tecnologías web e integradacon APIs de mapas, ofrece una experiencia 
        sencilla e intuitiva.</p>
  <div class="img-superpuesta">
    <img src="imagenes/mapa1.png" alt="Mapa" class="img-bloque">
    <span class="texto-superpuesto">Menu de inicio</span>
  </div>
  <div class="img-superpuesta">
    <img src="imagenes/mapa2.png" alt="Mapa" class="img-bloque">
    <span class="texto-superpuesto">Ejemplo mapa con marcadores en Madrid</span>
  </div>
  <div class="img-superpuesta">
    <img src="imagenes/terremoto.png" alt="Mapa" class="img-bloque">
    <span class="texto-superpuesto">Detector de terremotos</span>
  </div>
  <a href="https://laidrillin.github.io/Google-maps/" target="_blank" class="btn-probar">Probar</a>
  <button onclick="volverAProyectos()">Volver</button>
        `;
    }
detalleDiv.innerHTML = contenido;
    }
function volverAProyectos(){
    document.getElementById('detalle-proyecto').style.display = 'none';
    document.querySelector('.bloques').style.display = 'flex';
}
function cambiarIdioma(idioma) {
  const textos = {
    en: {
      titulo: "¡Welcome to my portfolio!",
      navInicio: "Home",
      navProyectos: "Projects",
      btnDetails: "Personal details",
      btnStatement: "Personal statement",
      btnEducation: "Education",
      btnWork: "Work experience",
      btnSkills: "Skills",
      name: "Name: Gabriel Gutierrez Castro",
      mail: "Mail: gabrielgcastro1809@gmail.com ",
      personal: "I consider myself a collaborative person, willing to work as part of a team and always willing to help with whatever is needed.",
      edu1: "First Year in Higher Web Developer Technician (2024-now IES San Andres)",
      edu2: "Technician in Comercial Activities (2022-2024 CIFP Ciudad de Leòn)",
      work1: "I have been interning in a clothing store for 2 months",
      work2: "Six weeks of interning as part of my vocational training program",
      skills1: "Visual Studio",
      skills2: "GitHub",
      skills3: "SQL",
      footer: "Gabriel Gutierrez Castro. All rights are reserved©️"
    },
    es: {
      titulo: "¡Bienvenid@s a mi portafolio!",
      navInicio: "Inicio",
      navProyectos: "Proyectos",
      btnDetails: "Datos personales",
      btnStatement: "Perfil personal",
      btnEducation: "Educación",
      btnWork: "Experiencia laboral",
      btnSkills: "Habilidades",
      name: "Nombre: Gabriel Gutierrez Castro",
      mail: "Correo: gabrielgcastro1809@gmail.com  ",
      personal: "Me considero una persona colaborativa, con buena disposición para trabajar en equipo y siempre dispuesta a ayudar en lo que sea necesario.",
      edu1: "Primer año en Técnico Superior en Desarrollo Web (2024-now IES San Andres)",
      edu2: "Técnico en Actividades Comerciales (2022-2024 CIFP Ciudad de Leòn)",
      work1: "He estado de prácticas en una tienda de ropa durante 2 meses",
      work2: "Seis semanas de prácticas como parte de mi formación profesional",
      skills1: "Visual Studio",
      skills2: "GitHub",
      skills3: "SQL",
      footer: "Gabriel Gutierrez Castro. Todos los derechos reservados©️"
    }
  };

  document.querySelector('h1').innerText = textos[idioma].titulo;
  document.querySelectorAll('nav ul li a')[0].innerText = textos[idioma].navInicio;
  document.querySelectorAll('nav ul li a')[1].innerText = textos[idioma].navProyectos;
  document.getElementById('btnDetails').innerText = textos[idioma].btnDetails;
  document.getElementById('btnStatement').innerText = textos[idioma].btnStatement;
  document.getElementById('btnEducation').innerText = textos[idioma].btnEducation;
  document.getElementById('btnWork').innerText = textos[idioma].btnWork;
  document.getElementById('btnSkills').innerText = textos[idioma].btnSkills;
  document.getElementById('name').innerText = textos[idioma].name;
  document.getElementById('mail').innerText = textos[idioma].mail;
  document.getElementById('personal').innerText = textos[idioma].personal;
  document.getElementById('edu1').innerText = textos[idioma].edu1;
  document.getElementById('edu2').innerText = textos[idioma].edu2;
  document.getElementById('work1').innerText = textos[idioma].work1;
  document.getElementById('work2').innerText = textos[idioma].work2;
  document.getElementById('skills1').innerText = textos[idioma].skills1;
  document.getElementById('skills2').innerText = textos[idioma].skills2;
  document.getElementById('skills3').innerText = textos[idioma].skills3;
  document.getElementById('footer-text').innerText = textos[idioma].footer;
}


