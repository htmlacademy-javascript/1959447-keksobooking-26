const COORDINATE_MAP = {
  lat: 35.68952,
  lng: 139.69199,
};

const COUNT_MAP_ZOOM = 12;
const MAX_POINTS_RENDER_LIMIT = 10;

const TitleCount ={
  MIN: 30,
  MAX: 100,
};

const GuestsCount = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  ZERO: '0',
};

const RoomsCount = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  HUNDRED: '100',
};

const MAX_PRICE = 100000;
const MIN_PRICE = 0;

const MinPriceLimit = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};

const PriceType = {
  ANY: 'any',
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high',
};

const PriceRange = {
  MIDDLE: 10000,
  HIGH: 50000,
};

const DEBOUNCE_DELAY = 500;

const IMAGE_FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const DEFAULT_AVATAR = 'img/muffin-grey.svg';

const ERROR_MESSAGE = 'Форма не отправлена. Попробуйте еще раз.';
const ERROR_MAP_MESSAGE = 'Ошибка при загрузке. Позже попробуйте еще раз.';

export {
  COORDINATE_MAP,
  COUNT_MAP_ZOOM,
  MAX_POINTS_RENDER_LIMIT,
  TitleCount,
  GuestsCount,
  RoomsCount,
  MAX_PRICE,
  MIN_PRICE,
  MinPriceLimit,
  PriceType,
  PriceRange,
  DEBOUNCE_DELAY,
  IMAGE_FILE_TYPES,
  DEFAULT_AVATAR,
  ERROR_MESSAGE,
  ERROR_MAP_MESSAGE,
};
