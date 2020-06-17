window.addEventListener('load', () => {
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menu-btn');
  const menuLink = document.getElementById('menu-link');

  menu.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});

