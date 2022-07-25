const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const closeMessage = () => {
  const element = document.querySelector('.message_open');
  element.remove();
};

const onMessageKeydown = (evt) => {
  if (evt.keyCode === 27) {
    closeMessage();
    document.removeEventListener('keydown', onMessageKeydown);
  }
};

const addListenerMessage = (elem) => {
  document.addEventListener('keydown', onMessageKeydown);
  elem.addEventListener('click', () => {
    closeMessage();
    document.removeEventListener('keydown', onMessageKeydown);
  });
};

const displayMessageSuccess = () => {
  const successMessageElement = successTemplate.cloneNode(true);
  document.body.appendChild(successMessageElement);
  addListenerMessage(successMessageElement);
};

const displayMessageError = (error) => {
  const errorMessageElement = errorTemplate.cloneNode(true);
  document.body.appendChild(errorMessageElement);

  const errorText = document.querySelector('.error__message');
  errorText.textContent = error;
  addListenerMessage(errorMessageElement);
};

export {displayMessageError, displayMessageSuccess};
