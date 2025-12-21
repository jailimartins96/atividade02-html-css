const audioBtn = document.getElementById("audioBtn");
const bgAudio = document.getElementById("bgAudio");

if (audioBtn && bgAudio) {
    // Atualiza texto do botão conforme estado inicial
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

// === Menu hamburguer ===
const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');

if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
        const opened = menu.classList.toggle('active');
        hamburger.classList.toggle('open', opened);
        // prevenir scroll do body quando menu aberto
        document.body.style.overflow = opened ? 'hidden' : '';
    });

    // Fechar menu quando clicar em um link interno
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