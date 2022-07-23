import { MESSAGE_TIME } from './consts.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const displayMessageSuccess = () => {
  const successMessageElement = successTemplate.cloneNode(true);
  document.body.appendChild(successMessageElement);
  setTimeout(() => {
    successMessageElement.remove();
  }, MESSAGE_TIME);
};

const displayMessageError = (error) => {
  const errorMessageElement = errorTemplate.cloneNode(true);
  document.body.appendChild(errorMessageElement);

  const errorText = document.querySelector('.error__message');
  errorText.textContent = error;

  const closeError = () => {
    errorMessageElement.remove();
  };

  const errorMessageCloseButton = document.querySelector('.error__button');
  errorMessageCloseButton.addEventListener('click', closeError);

  const eventOnEsc = (evt) => {
    if (evt.keyCode === 27) {
      closeError();
    }
  };
  document.addEventListener('keydown', eventOnEsc);

  const eventOnClick = () => {
    closeError();
  };
  document.addEventListener('click', eventOnClick);
};

export {displayMessageError, displayMessageSuccess};
