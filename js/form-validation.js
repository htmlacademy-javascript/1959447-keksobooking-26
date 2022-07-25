import {MAX_PRICE, MIN_PRICE, MinPriceLimit, TitleCount, GuestsCount, RoomsCount} from './consts.js';

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

const validateTitle = (value) => value.length >= TitleCount.MIN && value.length <= TitleCount.MAX;
pristine.addValidator(titleElement, validateTitle, `Заголовок не менее ${TitleCount.MIN} и не более ${TitleCount.MAX} символов`);

const validatePrice = (value) => value >= MIN_PRICE && value <= MAX_PRICE;
pristine.addValidator(priceElement, validatePrice, `Максимальное значение ${MAX_PRICE}`);


const validateRoomNumber = (value) => {
  const capacityValue = capacityElement.value;

  if(value === GuestsCount.ONE) {
    return capacityValue === GuestsCount.ONE;
  } else if(value === GuestsCount.TWO) {
    return capacityValue === GuestsCount.ONE || capacityValue === GuestsCount.TWO;
  } else if(value === GuestsCount.THREE) {
    return capacityValue === GuestsCount.ONE || capacityValue === GuestsCount.TWO || capacityValue === GuestsCount.THREE;
  } else if(value === GuestsCount.ZERO) {
    return capacityValue === GuestsCount.ZERO;
  }
};

const getRoomNumberErrorMessage = (value) => {
  if(value === RoomsCount.ONE) {
    return `Для ${GuestsCount.ONE} гостя`;
  } else if(value === RoomsCount.TWO) {
    return `Возможно не более  ${GuestsCount.TWO}х гостей`;
  } else if(value === RoomsCount.THREE) {
    return `Возможно не более ${GuestsCount.THREE}х гостей`;
  } else if(value === RoomsCount.HUNDRED) {
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
    price.placeholder = MinPriceLimit.BUNGALOW;
    price.min = MinPriceLimit.BUNGALOW;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: MinPriceLimit.BUNGALOW,
        max: MAX_PRICE,
      }
    });
    return true;
  } else if(value === 'flat') {
    price.placeholder = MinPriceLimit.FLAT;
    price.min = MinPriceLimit.FLAT;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: MinPriceLimit.FLAT,
        max: MAX_PRICE,
      }
    });
    return true;
  } else if(value === 'hotel') {
    price.placeholder = MinPriceLimit.HOTEL;
    price.min = MinPriceLimit.HOTEL;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: MinPriceLimit.HOTEL,
        max: MAX_PRICE,
      }
    });
    return true;
  } else if(value === 'house') {
    price.placeholder = MinPriceLimit.HOUSE;
    price.min = MinPriceLimit.HOUSE;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: MinPriceLimit.HOUSE,
        max: MAX_PRICE,
      }
    });
    return true;
  } else if(value === 'palace') {
    price.placeholder = MinPriceLimit.PALACE;
    price.min = MinPriceLimit.PALACE;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: MinPriceLimit.PALACE,
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
