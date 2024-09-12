const colorSelect = document.getElementById('color');
const titulo = document.getElementById('titulo');

colorSelect.addEventListener('change', function() {
    // Cambia el color del título basado en el valor seleccionado
    titulo.style.color = colorSelect.value;
});