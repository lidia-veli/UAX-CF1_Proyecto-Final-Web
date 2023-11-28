
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

    document.getElementById("suscriptionForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let favoriteMovie = document.getElementById("fav-movie").value;

        // Obtener los géneros de películas seleccionados
        let favoriteGenres = [];
        let genreCheckboxes = document.querySelectorAll('input[name="fav-genres"]:checked');
        genreCheckboxes.forEach(function (checkbox) {
            favoriteGenres.push(checkbox.value);
        });

        // Obtener si se suscribe al collage anual
        let collageSubscription = document.querySelector('input[name="collage-suscription"]:checked').value;

        // Crear el resumen del formulario
        let summary = "Welcome to our website!\n\n";
        summary += "Name: " + name + "\n";
        summary += "Email: " + email + "\n";
        summary += "Favorite movie: " + favoriteMovie + "\n";
        summary += "Favorite genres: " + favoriteGenres.join(", ") + "\n";
        summary += "Collage subscription: " + collageSubscription + "\n";

        // Mostrar la ventana emergente con el resumen del formulario
        alert(summary);

        // Reiniciar el formulario
        document.getElementById("suscriptionForm").reset();
    });
});
