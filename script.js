const navBar = document.querySelector('nav');
const dropDown = document.getElementById('dropdown');

dropDown.addEventListener('click', () => {
    navBar.classList.remove('hidden')

})