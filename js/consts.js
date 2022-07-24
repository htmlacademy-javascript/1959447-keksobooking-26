const COORDINATE_MAP = {
  lat: 35.68952,
  lng: 139.69199,
};

const COUNT_MAP_ZOOM = 12;
const MAX_POINTS_RENDER_LIMIT = 10;

const MAX_PRICE = 100000;

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

const MESSAGE_TIME = 2000;

const NUMBER_MARKERS = 10;

const DEBOUNCE_DELAY = 500;

const IMAGE_FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const DEFAULT_AVATAR = 'img/muffin-grey.svg';

const ERROR_MESSAGE = 'Форма не отправлена. Попробуйте еще раз.';

export {
  COORDINATE_MAP,
  COUNT_MAP_ZOOM,
  MAX_POINTS_RENDER_LIMIT,
  MAX_PRICE,
  PriceType,
  PriceRange,
  MESSAGE_TIME,
  NUMBER_MARKERS,
  DEBOUNCE_DELAY,
  IMAGE_FILE_TYPES,
  DEFAULT_AVATAR,
  ERROR_MESSAGE,
};
