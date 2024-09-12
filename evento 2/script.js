document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const body = document.body;
    const video = document.getElementById('mondongo');
    //cambia el fondo
    function changeBackgroundGradient() {
        const color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;// color en hexedecimal
        const color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;// dos colores para la gradiente
        body.style.backgroundSize = '100% 100%'; // Mantener el tamaño del fondo para la animación
    }

    function animateText() {
        message.classList.add('animate');
        setTimeout(() => {
            message.classList.remove('animate');
        }, 200);
    }

    function showMondongo() {//muestra el video
        video.style.display = 'flex';
    }

    function hideMonongo() {//esconde el video al 
        video.style.display = 'none';
    }

    document.addEventListener('keydown', (event) => {
        const key = event.key.toUpperCase();
        changeBackgroundGradient();
        animateText();
        message.textContent = `Presionaste: ${key}`;
        // si se presiona la m muestra el video
        if (key == 'M') {
            showMondongo();
        }else {
            hideMonongo();
        }
    });
});
