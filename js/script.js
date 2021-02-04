import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import {showModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
    const timerId = setTimeout(showModal, 100000, '.modal');

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', timerId);
    timer('.timer', '2021-03-10');
    cards();
    forms('form', timerId);
    slider({
        container: '.offer__slide',
        slide: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    calc();
});