document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        document.addEventListener('keydown', function(event) {
            if (event.key === 'd' || event.key === 'D') {
                document.body.classList.toggle('dark-mode');
            }
        });
        
        window.addEventListener('scroll', function() {
            const titulo = document.getElementById('titulo');
            
            // Obtenemos el valor del desplazamiento vertical
            let scrollPos = window.scrollY;
            
            // Calculamos el valor de hue (tono) basado en el scroll (máximo de 360)
            // Dividimos entre 5 para que el cambio de color sea más lento
            let hueValue = scrollPos / 5;
            
            // Aplicamos el color al título utilizando HSL
            titulo.style.color = `hsl(${hueValue}, 100%, 50%)`;
        });
        
        const colorSelect = document.getElementById('color');
        const titulo = document.getElementById('titulo');
        
        colorSelect.addEventListener('input', function() {
            // Cambia el color del título basado en el valor seleccionado
            titulo.style.color = colorSelect.value;
        });
        