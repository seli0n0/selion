// Мобильное меню
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Плавная прокрутка
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Закрываем мобильное меню после клика
    if (navLinks.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});
// Фильтрация портфолио
const filterButtons = document.querySelectorAll('.filter-button');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Убираем активный класс у всех кнопок
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Добавляем активный класс текущей кнопке
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    portfolioCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Анимация появления карточек при прокрутке
const portfolioCardsAnimate = document.querySelectorAll('.portfolio-card');

const checkVisibility = () => {
  portfolioCardsAnimate.forEach(card => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      card.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Анимация круговых прогресс-баров
// Анимация круговых прогресс-баров
const progressCircles = document.querySelectorAll('.skill-progress-circle');

const animateProgressBars = () => {
  progressCircles.forEach(circle => {
    const progress = circle.getAttribute('data-progress');
    const fill = circle.querySelector('.progress-circle-fill');
    const circumference = 314; // 2 * π * r (π = 3.14, r = 50)
    const offset = circumference - (progress / 100) * circumference;

    fill.style.strokeDashoffset = offset;
  });
};

// Анимация появления карточек навыков
const skillCards = document.querySelectorAll('.skill-card');

const checkSkillsVisibility = () => {
  skillCards.forEach(card => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      card.classList.add('visible');
      animateProgressBars();
    }
  });
};

window.addEventListener('scroll', checkSkillsVisibility);
window.addEventListener('load', checkSkillsVisibility);

// Анимация появления карточек "О себе"
const aboutCards = document.querySelectorAll('.about-card');

const checkAboutVisibility = () => {
  aboutCards.forEach(card => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      card.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', checkAboutVisibility);
window.addEventListener('load', checkAboutVisibility);

// Анимация появления контактов
const contactForm = document.querySelector('.contact-form');
const contactInfo = document.querySelector('.contact-info');

const checkContactVisibility = () => {
  const formPosition = contactForm.getBoundingClientRect().top;
  const infoPosition = contactInfo.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (formPosition < screenPosition) {
    contactForm.classList.add('visible');
  }
  if (infoPosition < screenPosition) {
    contactInfo.classList.add('visible');
  }
};

window.addEventListener('scroll', checkContactVisibility);
window.addEventListener('load', checkContactVisibility);