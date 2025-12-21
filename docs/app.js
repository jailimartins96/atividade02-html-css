const audioBtn = document.getElementById("audioBtn");
const bgAudio = document.getElementById("bgAudio");

if (audioBtn && bgAudio) {
    audioBtn.textContent = bgAudio.paused ? 'Tocar Áudio 🎵' : 'Pausar Áudio ⏸️';

    audioBtn.addEventListener("click", () => {
        if (bgAudio.paused) {
            bgAudio.play().then(() => {
                audioBtn.textContent = 'Pausar Áudio ⏸️';
            }).catch(err => {
                console.error('Erro ao tocar áudio:', err);
            });
        } else {
            bgAudio.pause();
            audioBtn.textContent = 'Tocar Áudio 🎵';
        }
    });
} else {
    console.warn('Elemento audioBtn ou bgAudio não encontrado.');
}

const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');

if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
        const opened = menu.classList.toggle('active');
        hamburger.classList.toggle('open', opened);
        document.body.style.overflow = opened ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburger.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
} else {
    console.warn('Elemento .hamburger ou #menu não encontrado.');
}