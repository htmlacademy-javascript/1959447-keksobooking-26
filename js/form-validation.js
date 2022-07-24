import {MAX_PRICE} from './consts.js';

const formElement = document.querySelector('.ad-form');
const sliderElement = document.querySelector('.ad-form__slider');
const titleElement = formElement.querySelector('#title');
const roomNumberElement = formElement.querySelector('#room_number');
const capacityElement = formElement.querySelector('#capacity');
const priceElement = formElement.querySelector('#price');
const typeElement = formElement.querySelector('#type');
const timeParentElement = formElement.querySelector('.ad-form__element--time');
const timeInElement = formElement.querySelector('#timein');
const timeOutElement = formElement.querySelector('#timeout');


const pristine = new Pristine(formElement, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;
pristine.addValidator(titleElement, validateTitle, 'Заголовок не менее 30 и не более 100 символов');

const validatePrice = (value) => value >= 0 && value <= MAX_PRICE;
pristine.addValidator(priceElement, validatePrice, `Максимальное значение ${MAX_PRICE}`);


const validateRoomNumber = (value) => {
  const capacityValue = capacityElement.value;

  if(value === '1') {
    return capacityValue === '1';
  } else if(value === '2') {
    return capacityValue === '1' || capacityValue === '2';
  } else if(value === '3') {
    return capacityValue === '1' || capacityValue === '2' || capacityValue === '3';
  } else if(value === '100') {
    return capacityValue === '0';
  }
};

const getRoomNumberErrorMessage = (value) => {
  if(value === '1') {
    return 'Для 1 гостя';
  } else if(value === '2') {
    return 'Возможно не более 2х гостей';
  } else if(value === '3') {
    return 'Возможно не более 3х гостей';
  } else if(value === '100') {
    return 'Не для гостей';
  }
};

pristine.addValidator(roomNumberElement, validateRoomNumber, getRoomNumberErrorMessage);

capacityElement.addEventListener('change', () => {
  pristine.validate(roomNumberElement);
});

const validateType = (value) => {
  const price = priceElement;

  if(value === 'bungalow') {
    price.placeholder = 0;
    price.min = 0;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: MAX_PRICE,
      }
    });
    return true;
  } else if(value === 'flat') {
    price.placeholder = 1000;
    price.min = 1000;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1000,
        max: MAX_PRICE,
      }
    });
    return true;
  } else if(value === 'hotel') {
    price.placeholder = 3000;
    price.min = 3000;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 3000,
        max: MAX_PRICE,
      }
    });
    return true;
  } else if(value === 'house') {
    price.placeholder = 5000;
    price.min = 5000;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 5000,
        max: MAX_PRICE,
      }
    });
    return true;
  } else if(value === 'palace') {
    price.placeholder = 10000;
    price.min = 10000;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 10000,
        max: MAX_PRICE,
      }
    });
    return true;
  }
};

pristine.addValidator(typeElement, validateType);

timeParentElement.addEventListener('change', (evt) => {
  timeInElement.value = evt.target.value;
  timeOutElement.value = evt.target.value;
});

export {pristine};
