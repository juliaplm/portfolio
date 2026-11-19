const hero = document.querySelector('.hero');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function updateHeroMotion() {
  const scrollProgress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / hero.offsetHeight));
  hero.style.setProperty('--star-turn', reducedMotion.matches ? '-12deg' : `${-12 + scrollProgress * 110}deg`);
}

let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    updateHeroMotion();
    scheduled = false;
  });
}, { passive: true });
reducedMotion.addEventListener('change', updateHeroMotion);
updateHeroMotion();
