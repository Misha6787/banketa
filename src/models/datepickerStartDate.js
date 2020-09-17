'use strict';

const datepickerStartDate = () => {
    const searchData = document.querySelector('.search__data');
    const data = new Date();
    const textMonth = () => {
        let month = data.toLocaleString('ru', { month: 'long' }).split('');
        const text =  month[0].toUpperCase();
        month.splice(0,1);
        month.unshift(text);
        month = month.join('');
        return month;
    };
    const textDay = () => {
        let day = data.getDate().toString();
        if (day.length < 2) {
            day = '0' + day;
        }
        return day;
    };
    const today = textDay() + ' ' + textMonth() + ' ' + data.getFullYear();
    searchData.value = today;
};

export default datepickerStartDate;
