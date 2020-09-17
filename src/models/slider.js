'use strict';

const slider = () => {
    const   slider = document.querySelectorAll('.publications__slider');

    slider.forEach((item) => {
        let currentSlide = +item.getAttribute('current-slide');
        item.addEventListener('click', event => {
            let slide = item.querySelectorAll('.publications__item'),
                portfolioDots = item.querySelector('.publications__dots'),
                dot = portfolioDots.querySelectorAll('.dot');
            const prevSlide = (elem, index, strClass) => {
                elem[index].classList.remove(strClass);
                item.setAttribute('current-slide', index);
                portfolioDots = item.querySelectorAll('.publications__dots');
                dot = portfolioDots[index].querySelectorAll('.dot');
            };
            const nextSlide = (elem, index, strClass) => {
                elem[index].classList.add(strClass);
                item.setAttribute('current-slide', index);
                portfolioDots = item.querySelectorAll('.publications__dots');
                dot = portfolioDots[index].querySelectorAll('.dot');
            };
            event.preventDefault();
            const target = event.target;
            if (!target.matches('.dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'publications__item-active');
            prevSlide(dot, currentSlide, 'dot-active');
    
            if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'publications__item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });
    });
};

export default slider;
