window.addEventListener('load', () => {
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const menuLink = document.getElementById('menu-link');

  function toggleActive() {
    menu.classList.toggle('active');
  }
  
  menuBtn.addEventListener('click', toggleActive);
  menuLink.addEventListener('click', () => setTimeout(toggleActive, 100));
});

