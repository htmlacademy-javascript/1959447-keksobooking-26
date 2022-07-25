import {IMAGE_FILE_TYPES, DEFAULT_AVATAR} from './consts.js';

const avatarImageChooserElement = document.querySelector('#avatar');
const avatarPreviewElement = document.querySelector('.ad-form-header__preview').querySelector('img');
const houseImageChooserElement = document.querySelector('.ad-form__input');
const houseImagePreviewElement = document.querySelector('.ad-form__photo');

const addAvatarLoader = () => {
  avatarImageChooserElement.addEventListener('change', () => {
    const file = avatarImageChooserElement.files[0];
    const fileName = file.name.toLowerCase();
    const matches = IMAGE_FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      avatarPreviewElement.src = URL.createObjectURL(file);
    }
  });
};

const addImageHouseLoader = () => {
  houseImageChooserElement.addEventListener('change', () => {
    const file = houseImageChooserElement.files[0];
    const fileName = file.name.toLowerCase();
    const matches = IMAGE_FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      houseImagePreviewElement.innerHTML = '';
      const imageElement = document.createElement('img');
      imageElement.src = URL.createObjectURL(file);
      imageElement.setAttribute('height', '70px');
      imageElement.setAttribute('width', '70px');
      imageElement.style = 'object-fit: cover;';
      houseImagePreviewElement.appendChild(imageElement);
    }
  });
};

const clearPreview = () => {
  const imagePreviewBlock = document.querySelector('.ad-form__photo img');
  avatarPreviewElement.src = DEFAULT_AVATAR;

  if (imagePreviewBlock) {
    imagePreviewBlock.remove();
  }
};

export {addImageHouseLoader, addAvatarLoader, clearPreview};


