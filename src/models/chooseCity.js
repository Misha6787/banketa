'use strict';

const start = () => {
    const   searchCity = document.querySelector('.search__city'),
            choiceCityBlock = document.querySelector('.choice__city-block');

    const toggleCityList = event => {
        const target = event.target;
        if (target.closest('.search__city') || target.closest('.choice__city-block')) {
            choiceCityBlock.style.display = 'flex';
            searchCity.classList.add('search__city-active');
        } else {
            choiceCityBlock.style.display = 'none';
            searchCity.classList.remove('search__city-active');
        }
    };
    const chooseCity = event => {
        event.preventDefault();
        const target = event.target;
        if (target.closest('.choice__city-block a')) {
            searchCity.textContent = target.textContent;
        }
    };
    document.body.addEventListener('click', toggleCityList);
    choiceCityBlock.addEventListener('click', chooseCity);
};

export default start;