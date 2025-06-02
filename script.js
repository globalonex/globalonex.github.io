// Создаем звездное небо
function createStars() {
  const starsContainer = document.querySelector('.stars');

  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Случайные параметры звезд
    const size = Math.random() * 3;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const opacity = Math.random();
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 5;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${posX}px`;
    star.style.top = `${posY}px`;
    star.style.opacity = opacity;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    starsContainer.appendChild(star);
  }
}

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Анимация при скролле
function animateOnScroll() {
  const elements = document.querySelectorAll('.about-content, .project-card, .contact-form');

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Инициализация
window.addEventListener('load', () => {
  createStars();
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
});

// Параллакс эффект
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.querySelector('.hero').style.backgroundPosition = `${x * 50}px ${y * 50}px`;
});

// Бургер-меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
});

window.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('techTrack');
  const content = track.innerHTML;
  track.innerHTML = content + content; // Дублируем содержимое внутри
});

document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();


});
