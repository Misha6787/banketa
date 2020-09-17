'use strict';

const sumPeople = () => {
    const   searchNumber = document.getElementById('search__number'),
            sumRange = document.querySelector('.sum__range');
    const peopleAccount = () => {
        searchNumber.value = sumRange.value;
    };
    sumRange.addEventListener('input', peopleAccount);
};

export default sumPeople;
