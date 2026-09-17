const pupilLeft = document.getElementById('pupilLeft');
const pupilRight = document.getElementById('pupilRight');
const passwordInput = document.getElementById('password');
const face = document.querySelector('.face');

// Слежение зрачков за курсором мыши
document.addEventListener('mousemove', (e) => {
  if (document.activeElement === passwordInput) return;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const reCalculate = (pupil) => {
    const rect = pupil.getBoundingClientRect();
    const pupilX = rect.left + rect.width / 2;
    const pupilY = rect.top + rect.height / 2;

    const angle = Math.atan2(mouseY - pupilY, mouseX - pupilX);
    const distance = Math.min(6, Math.hypot(mouseX - pupilX, mouseY - pupilY) / 10);

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    pupil.style.transform = `translate(${x}px, ${y}px)`;
  };

  reCalculate(pupilLeft);
  reCalculate(pupilRight);
});

// Когда кликают на пароль — глаза прячутся
passwordInput.addEventListener('focus', () => {
  face.classList.add('hide-eyes');
});

passwordInput.addEventListener('blur', () => {
  face.classList.remove('hide-eyes');
});
