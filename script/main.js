let headerOpenBtn = document.querySelector('.header-open--btn');
let headerNavMobile = document.querySelector('.header-nav--mobile');
let headerShade = document.querySelector('.header-shade');
let headerNavMobileCloseBtn = document.querySelector('.header-nav-mobile--close-btn');

headerOpenBtn.addEventListener('click', () => {
    headerNavMobile.style.transform = 'translateX(0%)';
    headerShade.style.transform = 'translateX(0%)';
})
headerShade.addEventListener('click', () => {
    headerNavMobile.style.transform = 'translateX(-110%)';
    headerShade.style.transform = 'translateX(-100%)';
})
headerNavMobileCloseBtn.addEventListener('click', () => {
    headerNavMobile.style.transform = 'translateX(-110%)';
    headerShade.style.transform = 'translateX(-100%)';
})