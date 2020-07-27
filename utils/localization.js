import * as Localization from 'expo-localization';
import loc from 'i18n-js';
loc.locale = Localization.locale;

import en from '../locale/en';
import it from '../locale/it';

loc.fallbacks = true;
loc.translations = {
  it,
  en,
};

export default loc;
