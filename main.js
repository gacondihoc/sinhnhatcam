const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

// kiểm soát nhạc chạy
window.addEventListener('pointerdown', function () {
    const audio = document.getElementById('bgm');
    if (audio.muted) {
        audio.muted = false;
        audio.play();
    }
}, { once: true });

// キャンドルと風船がふわっと現れるようにする。
const nenBtn = document.getElementById('nenBtn');

nenBtn.addEventListener('click', () => {
    for (let i = 0; i < 100; i++) {
        const nen = document.createElement('div');
        nen.className = 'nen';
        nen.textContent = '🎈';

        const left = Math.random() * window.innerWidth;
        const delay = Math.random() * 2;

        nen.style.left = `${left}px`;
        nen.style.bottom = `-100px`;
        nen.style.animationDelay = `${delay}s`;

        document.body.appendChild(nen);

        setTimeout(() => {
            nen.remove();
        }, 3000);
    }
});