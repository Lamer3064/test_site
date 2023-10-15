document.addEventListener('DOMContentLoaded', (event) => {
    // слайдер
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    let leftArrow = document.getElementById('left-arrow');
    let rightArrow = document.getElementById('right-arrow');

    let activeSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i >= index && i < index + 3 ? 'flex' : 'none';
        });

        dots.forEach((dot, i) => {
            dot.style.backgroundColor = i === Math.floor(index / 3) ? '#2A6CEAFF' : '#C2C8CD';
        });
    }

    leftArrow.addEventListener('click', () => {
        activeSlideIndex = (activeSlideIndex - 3 + slides.length) % slides.length;
        showSlide(activeSlideIndex);
    });

    rightArrow.addEventListener('click', () => {
        activeSlideIndex = (activeSlideIndex + 3) % slides.length;
        showSlide(activeSlideIndex);
    });

    showSlide(activeSlideIndex);

    // вопрсоы и ответы
    document.querySelectorAll('.op').forEach(function(op) {
        op.addEventListener('click', function() {
            var sibling = this.nextElementSibling;
            while (sibling) {
                if (sibling.classList.contains('about')) {
                    sibling.style.display = sibling.style.display === 'none' ? 'block' : 'none';
                    break;
                }
                sibling = sibling.nextElementSibling;
            }
        });
    });

    document.querySelectorAll('.name, .phone').forEach(function(input) {
        input.addEventListener('blur', function() {
            if (this.value !== '') {
                this.nextElementSibling.classList.add('not-empty');
            } else {
                this.nextElementSibling.classList.remove('not-empty');
            }
        });
    });

    // форма
    let nameInput = document.querySelector('.name');
    let phoneInput = document.querySelector('.phone');
    let namePlus = document.querySelector('.name_form .plus');
    let nameMinus = document.querySelector('.name_form .minus');
    let phonePlus = document.querySelector('.phone_form .plus');
    let phoneMinus = document.querySelector('.phone_form .minus');

    function checkNameInput() {
        let nameValue = nameInput.value;
        if (nameValue) {
            if (/^[a-zA-Zа-яА-Я]+$/.test(nameValue)) {
                namePlus.style.display = 'block';
                nameMinus.style.display = 'none';
            } else {
                namePlus.style.display = 'none';
                nameMinus.style.display = 'block';
            }
        } else {
            namePlus.style.display = 'none';
            nameMinus.style.display = 'none';
        }
    }

    function checkPhoneInput() {
        let phoneValue = phoneInput.value;
        if (phoneValue) {
            if (/^\d+$/.test(phoneValue)) {
                phonePlus.style.display = 'block';
                phoneMinus.style.display = 'none';
            } else {
                phonePlus.style.display = 'none';
                phoneMinus.style.display = 'block';
            }
        } else {
            phonePlus.style.display = 'none';
            phoneMinus.style.display = 'none';
        }
    }

    nameInput.addEventListener('keyup', checkNameInput);
    phoneInput.addEventListener('keyup', checkPhoneInput);


    // якоря
    function scrollToSmoothly(pos, time) {
        var currentPos = window.pageYOffset;
        var start = null;
        if(time == null) time = 2000;
        pos = +pos, time = +time;
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start;
            var progress = currentTime - start;
            if (currentPos < pos) {
                window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
            } else {
                window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
            }
            if (progress < time) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, pos);
            }
        });
    }

    document.querySelector('.yak1').addEventListener('click', function() {
        var target = document.getElementById('main');
        scrollToSmoothly(target.offsetTop, 500);
    });
    document.querySelector('.yak2').addEventListener('click', function() {
        var target = document.getElementById('right');
        scrollToSmoothly(target.offsetTop, 500);
    });
    document.querySelector('.yak3').addEventListener('click', function() {
        var target = document.getElementById('faq');
        scrollToSmoothly(target.offsetTop, 500);
    });
    document.querySelector('.yak4').addEventListener('click', function() {
        var target = document.getElementById('form');
        scrollToSmoothly(target.offsetTop, 500);
    });

    // кнопка на старте
    document.getElementById('start').addEventListener('click', function() {
        var target = document.getElementById('main');
        scrollToSmoothly(target.offsetTop, 500);
    });
});
