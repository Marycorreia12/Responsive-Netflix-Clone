const  a = document.querySelector('.more');
const info = document.querySelector('.info');
a.addEventListener('click', () => {
    info.classList.add('open');
});
