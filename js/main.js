import {initMap, setAds, renderPoints} from './map.js';
import {COORDINATE_MAP, COUNT_MAP_ZOOM} from './consts.js';
import {initForm, setUserFormSubmit} from './form.js';
import {displayMessageError, displayMessageSuccess} from './message.js';
import {getData} from './api.js';
import {disablePage} from './general.js';
import {DEBOUNCE_DELAY} from './consts.js';
import {initFilters, filterAds} from './form-filter.js';
import {debounce} from './util.js';

initForm();
disablePage();
initMap(COORDINATE_MAP, COUNT_MAP_ZOOM);

setUserFormSubmit(displayMessageSuccess);

getData((ads) => {
  setAds(ads);
  renderPoints(ads);
  const onFilterChangeWithDebounce = debounce(filterAds, DEBOUNCE_DELAY);
  initFilters(onFilterChangeWithDebounce);
}, displayMessageError);
