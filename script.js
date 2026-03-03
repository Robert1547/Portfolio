document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

const darkBtn = document.getElementById('darkModeBtn');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
