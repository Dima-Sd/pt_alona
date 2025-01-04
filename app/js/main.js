const accordeonButton = document.querySelectorAll('.faq__item')
accordeonButton.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.toggle('hidden')
    })
})

const menu = document.querySelector('.menu')
window.addEventListener('scroll', function () {
    let scrollPosition = this.scrollY;

    if (scrollPosition > 0) {
        menu.classList.add('scroll')
    } else {
        menu.classList.remove('scroll')
    }
})

const menuMob = document.querySelector('.menu')
menuMob.addEventListener('click', function () {
    this.classList.toggle('is-open')
})

$(document).ready(function () {
    $(".menu a, .menu__link, .footer__link, .logo").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 300);
    });
});