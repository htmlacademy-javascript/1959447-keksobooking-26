import { sendData } from './api.js';
import {initSlider, resetSlider} from './form-slider.js';
import {pristine} from './form-validation.js';
import {resetMap} from './map.js';
import {displayMessageError} from './message.js';
import { addImageHouseLoader, addAvatarLoader, clearPreview } from './form-images-uploaders.js';
import {clearFilterForm, filterAds} from './form-filter.js';
import {ERROR_MESSAGE} from './consts.js';

const formElement = document.querySelector('.ad-form');
const fieldsetElements = formElement.querySelectorAll('fieldset');
const addressElement = document.querySelector('#address');
const submitButtonElement = formElement.querySelector('.ad-form__submit');
const resetButtonElement = formElement.querySelector('.ad-form__reset');

const disableForm = () => {
  formElement.classList.add('ad-form--disabled');
  fieldsetElements.forEach((fieldElement) => {
    fieldElement.disabled = true;
  });
};
const enableForm = () => {
  formElement.classList.remove('ad-form--disabled');
  fieldsetElements.forEach((fieldElement) => {
    fieldElement.disabled = false;
  });
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
};

const resetForm = () => {
  formElement.reset();
  pristine.reset();
  resetMap();
  clearPreview();
  resetSlider();
  clearFilterForm();
  filterAds();
};

const resetFormButton = () => {
  resetButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForm();
  });
};

const initForm = () => {
  initSlider();
  addressElement.readonly = true;
  resetFormButton();
  addImageHouseLoader();
  addAvatarLoader();
};

const setUserFormSubmit = (onSuccess) => {
  formElement.addEventListener ('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          resetForm();
        },
        () => {
          displayMessageError(ERROR_MESSAGE);
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {disableForm, enableForm, initForm, setUserFormSubmit};
