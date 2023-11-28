// Interacción 1: Cambiar el color de fondo al hacer clic en un botón
function cambiarColorFondo() {
  var coloresBarbie = ['#ffd4e5', '#d4ffea', '#dbdcff', '#eecbff', '#feffa3'];
  var coloresOppenh = ['#9bb393', '#a27070', '#9cb3ba', '#cb9952'];

  var nombreArchivo = window.location.href.split("/").pop();

  var colores;
  if (nombreArchivo === "barbie-review.html") {
    colores = coloresBarbie;
  } else if (nombreArchivo === "oppenh-review.html") {
    colores = coloresOppenh;
  } else {
    return; // No se realiza ningún cambio si no estamos en los archivos deseados
  }

  var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  
  var pageContainers = document.querySelectorAll('.page-container');
  pageContainers.forEach(function(pageContainer) {
    pageContainer.style.backgroundColor = colorAleatorio;
  });

  var clickButtonContainers = document.querySelectorAll('.click-button-container');
  clickButtonContainers.forEach(function(clickButtonContainer) {
    clickButtonContainer.style.backgroundColor = colorAleatorio;
  });
}

cambiarColorFondo();




// INTERACCIÓN: Mostrar dato curioso acerca de la película
// INTERACCIÓN: Mostrar dato curioso acerca de la película
const mostrarDato = document.getElementById('mostrarDato');

if (mostrarDato) {
    mostrarDato.addEventListener('click', () => {
        const opciones = ["Y", "YES", "yes", "y", "Yes"];

        let respuesta = prompt("Do you want to know a fun fact about this movie (Y/N)").toLowerCase();

        if (opciones.includes(respuesta)) {
            if (window.location.href.includes("barbie-review.html")) {
                mostrarInfoBarbie();
            } else if (window.location.href.includes("oppenh-review.html")) {
                mostrarInfoOppenh();
            } else {
                alert("No fun fact available for this movie.");
            }
        } else {
            alert("All good! Continue visiting our website.");
        }
    });
}

// Función para mostrar el dato curioso de Barbie
function mostrarInfoBarbie() {
    alert("MARGOT ROBBIE'S GIFTS TO RYAN GOSLING: \nThough hard to believe, Ryan Gosling was initially doubtful to accept the role of Ken, but Gerwig and Robbie loved him. So Margot promised to give him a gift every day if he accepted the project. And she did, for every day of filming, Robbie gifted Gosling a Ken-inspired detail, like a shell necklace, a horse book...");
}

// Función para mostrar el dato curioso de Oppenheimer
function mostrarInfoOppenh() {
    alert("REAL EXPLOSIONS: \nThe bomb explosions in the movie were not generated with CGI (Computer-Generated Imagery), widely used in video games. Through 'controlled medium-scale explosions', plus a certain camera positioning, the visual effect of a nuclear explosion was achieved.");
}
