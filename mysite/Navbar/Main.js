const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('_navbar_menu');
const icons = documnet.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})