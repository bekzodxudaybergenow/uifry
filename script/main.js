let header = document.querySelector('.header-wrap-one');
let headerOpenBtn = document.querySelector('.header-open--btn');
let headerNavMobile = document.querySelector('.header-nav--mobile');
let headerShade = document.querySelector('.header-shade');
let headerNavMobileCloseBtn = document.querySelector('.header-nav-mobile--close-btn');

// FAQ
let faqs = document.querySelectorAll('.faq-list--item');
let faqAnswer = document.querySelectorAll('.faq-item--answer');

AOS.init({
    once: true,
    duration: 1500,
});

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



let currentScroll = 0;
this.addEventListener('scroll', () => {

    if(scrollY > currentScroll) {
        header.classList.add('headScroll');
    }
    else if (scrollY == 0) {
        header.style = 'box-shadow: none;'
    }
    else {
        header.classList.remove('headScroll');
        header.style = 'box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);'
    }

    currentScroll = scrollY;
}) 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    thumbs: {
        swiper: swiper,
    },
});

/* FAQ */
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
        faqAnswer.classList.toggle('active');
    })
})