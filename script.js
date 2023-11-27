
// INTERACCIÓN: Saludo personalizado al cargar la página
window.onload = () => {
    let nombre = prompt("What's your name?");
    alert(`Welcome, ${nombre}!`);
};


// INTERACCIÓN: Mostrar/ocultar una sección al hacer clic en un botón
const ocultarSeccion = document.getElementById('ocultarSeccion');
const becomeMemberSection = document.getElementById('become-member-section');

ocultarSeccion.addEventListener('click', () => {
    becomeMemberSection.style.display = (becomeMemberSection.style.display === 'none' || becomeMemberSection.style.display === '') ? 'block' : 'none';
});


// FORMULARIO DE SUSCRIPCIÓN
// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Agrega un listener al formulario
    document.getElementById("suscriptionForm").addEventListener("submit", function (event) {
        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();

        // Muestra un mensaje de éxito
        alert("You are now officially a member of our community!");

        // Reinicia el formulario
        document.getElementById("suscriptionForm").reset();
    });
});
