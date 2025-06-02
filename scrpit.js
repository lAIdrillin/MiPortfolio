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
      <img src="imagenes/juego_inicio.png" alt="Cartas" class="img-bloque">
      <p>historial</p>
      <img src="imagenes/juego_historial.png" alt="Cartas" class="img-bloque">
      <p>Records</p>
      <img src="imagenes/juego_records.png" alt="Cartas" class="img-bloque">
      <p>Tablero</p>
      <img src="imagenes/juego_tablero.png" alt="Cartas" class="img-bloque">
    `;
    } else if (proyecto === 'calculadora'){
        contenido = `
        <h2>CalculadoraIp</h2>
         <p>Menu de inicio</p>
        <img src="imagenes/calculadora_inicio.png" alt="calculadora" class="img-bloque">
        <p>Detalles de una ip</p>
        <img src="imagenes/calculadora.png" alt="calculadora" class="img-bloque">
        `;
    } else if(proyecto === 'appmaps') {
        contenido = `
        <h2>AppMaps</h2>
        <p>Menu de inicio</p>
        <img src="imagenes/mapa1.png" alt="Mapa" class="img-bloque">
        <p>Ejemplo mapa con marcadores en Madrid</p>
        <img src="imagenes/mapa2.png" alt="Mapa" class="img-bloque">
        <p>Detector de terremotos</p>
        <img src="imagenes/terremoto.png" alt="Mapa" class="img-bloque">
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
      titulo: "Welcome to my portfolio",
      navInicio: "Home",
      navProyectos: "Projects",
      btnDetails: "Personal details",
      btnStatement: "Personal statement",
      btnEducation: "Education",
      btnWork: "Work experience",
      btnSkills: "Skills",
      name: "Name: Gabriel Gutierrez Castro",
      mail: "Mail: gabrielgcastro1809@gmail.com ",
      number: "Personal number: ",
      personal: "hello",
      edu1: "First Year in Higher Web Developer Technician",
      edu2: "Technician in Comercial Activities",
      work1: "I have been interning in a clothing store for 2 months",
      work2: "Six weeks of interning as part of my vocational training program",
      skills: "hello",
      footer: "Gabriel Gutierrez Castro. All rights are reserved©️"
    },
    es: {
      titulo: "Bienvenido a mi portafolio",
      navInicio: "Inicio",
      navProyectos: "Proyectos",
      btnDetails: "Datos personales",
      btnStatement: "Perfil personal",
      btnEducation: "Educación",
      btnWork: "Experiencia laboral",
      btnSkills: "Habilidades",
      name: "Nombre: Gabriel Gutierrez Castro",
      mail: "Correo: gabrielgcastro1809@gmail.com  ",
      number: "Teléfono: ",
      personal: "hola",
      edu1: "Primer año en Técnico Superior en Desarrollo Web",
      edu2: "Técnico en Actividades Comerciales",
      work1: "He estado de prácticas en una tienda de ropa durante 2 meses",
      work2: "Seis semanas de prácticas como parte de mi formación profesional",
      skills: "hola",
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
  document.getElementById('number').innerText = textos[idioma].number;
  document.getElementById('personal').innerText = textos[idioma].personal;
  document.getElementById('edu1').innerText = textos[idioma].edu1;
  document.getElementById('edu2').innerText = textos[idioma].edu2;
  document.getElementById('work1').innerText = textos[idioma].work1;
  document.getElementById('work2').innerText = textos[idioma].work2;
  document.getElementById('skills').innerText = textos[idioma].skills;
  document.getElementById('footer-text').innerText = textos[idioma].footer;
}


