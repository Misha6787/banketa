'use strict';

const focusArrow = () => {
    const choiseDate = document.querySelector('.choise__date');

    const focused = () => {
        const datepick = document.querySelector('.datepicker.-bottom-left-.-from-bottom-');
        if (datepick.classList.contains('active')) {
            choiseDate.classList.add('choise__date-active');
        } else {
            choiseDate.classList.remove('choise__date-active');
        }
    };
    document.body.addEventListener('click', focused);
};

export default focusArrow;
