const intro = document.getElementById('intro');
const cartaDiv = document.getElementById('carta');
const abrirCarta = document.getElementById('abrir-carta');
const cerrarCarta = document.getElementById('cerrar-carta');
const musica = document.getElementById('musica-fondo');

let musicaActivada = false;

function reproducirMusica() {
    if (!musicaActivada) {
        musica.volume = 0.4;
        musica.play()
            .then(() => {
                musicaActivada = true;
                console.log("🎵 Música reproduciendo - Desde Cuando - Alejandro Sanz");
            })
            .catch(error => {
                console.log("Error al reproducir música:", error);
            });
    }
}

abrirCarta.addEventListener('click', () => {
    intro.classList.remove('activa');
    cartaDiv.classList.add('activa');
    reproducirMusica();
});

cerrarCarta.addEventListener('click', () => {
    cartaDiv.classList.remove('activa');
    intro.classList.add('activa');
});

// Botón de foto y lightbox
const btnFoto = document.getElementById('btn-foto');
const lightbox = document.getElementById('lightbox');
const cerrarFoto = document.getElementById('cerrar-foto');

btnFoto.addEventListener('click', () => {
    lightbox.style.display = 'flex';
});

cerrarFoto.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
    }
});
