window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`); // Правильный способ получения scrollY
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    sidebar.style.left = (sidebar.style.left === '0px') ? '-250px' : '0px'; // Открытие/закрытие боковой панели
    hamburger.classList.toggle('active'); // Переключение классов гамбургера
});




const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('#registerButton'); // Обратите внимание на правильный ID
const closeModalBtns = document.querySelectorAll('.close'); // Все кнопки закрытия

loginBtn.addEventListener('click', openLoginModal);
registerBtn.addEventListener('click', openRegisterModal);

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal); // Закрытие модальных окон
});








function openLoginModal() {
        document.getElementById('loginModal').style.display = 'flex';
        document.getElementById('registerModal').style.display = 'none';
    }

    function openRegisterModal() {
        document.getElementById('registerModal').style.display = 'flex';
        document.getElementById('loginModal').style.display = 'none';
    }

    function closeModal() {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('registerModal').style.display = 'none';
    }

    function switchToRegister() {
        openRegisterModal();
    }

    function switchToLogin() {
        openLoginModal();
    }