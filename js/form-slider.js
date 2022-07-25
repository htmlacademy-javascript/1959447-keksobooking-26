import {MAX_PRICE, MinPriceLimit} from './consts.js';

const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('.ad-form__value');

/**
 * Инициализация слайдера
 * @param {} sliderElement - элемент в котором отрисовывается слайдер
 * @param {} valueElement - поле ввода значения
 */
const initSlider = ()  => {
  noUiSlider.create(sliderElement, {
    range: {
      min: MinPriceLimit.FLAT,
      max: MAX_PRICE,
    },
    start:0,
    step: 1000,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
  });
};

const disableSlider = () => {
  sliderElement.setAttribute('disabled', '');
};

const enableSlider = () => {
  sliderElement.removeAttribute('disabled');
};

const resetSlider = () => {
  sliderElement.noUiSlider.updateOptions( {
    start: 0,
  });
};

export {initSlider, enableSlider, disableSlider, resetSlider};
