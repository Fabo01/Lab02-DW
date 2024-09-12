document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const titulo = document.getElementById('titulo');
    const colorPicker = document.getElementById('color');
    const body = document.body;
    const sections = document.querySelectorAll('section');

    // Funcionalidad 1: Cambiar el color del texto del título con el selector de color
    colorPicker.addEventListener('input', (event) => {
        const color = event.target.value;
        titulo.style.color = color;
    });

    // Funcionalidad 2: Activar/desactivar modo oscuro al presionar "D"
    let darkModeEnabled = false;
document.addEventListener('keydown', (event) => {
    if (event.key.toUpperCase() === 'D') {
        darkModeEnabled = !darkModeEnabled;
        if (darkModeEnabled) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }
});

// Funcionalidad 3: Efecto arcoiris en el fondo al hacer scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const hue = (scrollY % 360);  // Cálculo del matiz (hue) basado en el scroll
    body.style.background = `hsl(${hue}, 100%, 70%)`;
});

    // Funcionalidad 4: Arrastrar y soltar las secciones
sections.forEach(section => {
    section.setAttribute('draggable', true);

    section.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
});

// Permitir soltar al final de la página
const footer = document.querySelector('footer');
footer.addEventListener('dragover', (event) => {
    event.preventDefault();
});

footer.addEventListener('drop', (event) => {
    event.preventDefault();
    const sectionId = event.dataTransfer.getData('text/plain');
    const section = document.getElementById(sectionId);
    if (section) {
        footer.before(section);
    }
});
});

document.addEventListener('DOMContentLoaded', () => {
    const carrito = document.getElementById('carrito-contenido');
    const carritoTitulo = document.getElementById('carrito-titulo');
    const productos = document.querySelectorAll('.item img');

    // Funcionalidad 1: Hacer que las imágenes sean arrastrables
    productos.forEach(producto => {
        producto.setAttribute('draggable', true);

        producto.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.src);
        });
    });

    // Funcionalidad 2: Permitir soltar las imágenes en el carrito
    carrito.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    carrito.addEventListener('drop', (event) => {
        event.preventDefault();
        const imgSrc = event.dataTransfer.getData('text/plain');
        if (imgSrc) {
            // Crear una copia de la imagen arrastrada
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            carrito.appendChild(imgElement);

            // Actualizar el texto del carrito
            carritoTitulo.textContent = 'Objeto añadido';
        }
    });
});

