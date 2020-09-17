// import json from '@/assets/json';
// import csv from '@/assets/data.csv'
// import xml from '@/assets/data.xml';
// import $ from 'expose-loader?exposes[]=$&exposes[]=jQuery!jquery';
import $ from 'jquery';
import script from '@models/chooseCity';
import sumPeople from '@models/numberPersons';
import openBlocksOffers from '@models/moreOffers';
import focusArrow from '@models/focusArrow';
import slider from '@models/slider';
import datepickerStartDate from '@models/datepickerStartDate';
import "@fancyapps/fancybox";
import '@/styles/style.css';
// import '@/styles/less.less';
import '@/styles/scss.scss';
// import '@models/paralax';
import '@models/datepicker.min';
// import webpackLogo from '@/assets/webpack-logo';
// import './babel';

$(document).ready(function() {
    $('#datepicker').datepicker({
        dateFormat: 'dd MM yyyy',
        minDate: new Date()
    });
});

script();
sumPeople();
openBlocksOffers();
focusArrow();
slider();
datepickerStartDate();