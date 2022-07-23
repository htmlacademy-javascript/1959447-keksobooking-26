import {createCardElement} from './cards.js';
import {enableForm} from './form.js';
import {COORDINATE_MAP, COUNT_MAP_ZOOM, MAX_POINTS_RENDER_LIMIT} from './consts.js';
import {enableFilterForm} from './form-filter.js';
import {enableSlider} from './form-slider.js';

const formElement = document.querySelector('.ad-form');
const addressElement = document.querySelector('#address');
const map = L.map('map-canvas');

let sourceAds = [];

const pinIconElement = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinMarkerElement = L.marker(
  COORDINATE_MAP,
  {
    draggable: true,
    icon: pinIconElement,
  },
);

const getAds = () => sourceAds.slice();

const setAds = (newAds) => {
  sourceAds = newAds;
};

const enablePage = () => {
  enableForm();
  enableFilterForm();
  enableSlider();
};

/**
 * Отрисовывает карту
 * @param {object} coordinate geographical coordinates
 * @param {Number} count  zoom level
 */
const initMap = (coordinate, count) => {
  map.on('load', () => {
    enablePage();
  });
  map.setView(coordinate, count);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  addressElement.value = `${COORDINATE_MAP.lat}, ${COORDINATE_MAP.lng}`;
  pinMarkerElement.setLatLng(coordinate).addTo(map);
};

pinMarkerElement.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  formElement.querySelector('#address').value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const clearMap = () => {
  markerGroup.clearLayers();
};

const pinIconSimilarElement = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createMarker = (paramPoint) => {
  const {lat, lng} = paramPoint.location;
  const marker = L.marker({
    lat,
    lng,
  }, {
    pinIconSimilarElement
  });
  marker.addTo(markerGroup).bindPopup(createCardElement(paramPoint));
};

const renderPoints = (ads) => {
  const limitedAds = ads.length > MAX_POINTS_RENDER_LIMIT ? ads.slice(0, MAX_POINTS_RENDER_LIMIT) : ads;
  limitedAds.forEach((ad) => createMarker(ad));
};

const resetMap = () => {
  addressElement.value = `${COORDINATE_MAP.lat}, ${COORDINATE_MAP.lng}`;
  pinMarkerElement.setLatLng(COORDINATE_MAP);
  map.setView(COORDINATE_MAP, COUNT_MAP_ZOOM);
};

export {initMap, resetMap, markerGroup, clearMap, renderPoints, getAds, setAds};
