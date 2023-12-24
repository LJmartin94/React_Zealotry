import * as RNLocalise from 'react-native-localize'; //Seems to cause issues on ios

import type { Strings } from './Strings';
import enGB from './Strings/en-GB.json';
import nlNL from './Strings/nl-NL.json';

type enKey = keyof typeof enGB;

export class Localiser {
  static _strings: Strings = {};
  static _systemLocale: string;

  static init() {
    this._systemLocale = RNLocalise.getLocales()[0].languageTag;
    this._loadLocale(this._systemLocale);
  }

  static _loadLocale(locale: string): boolean {
    let localiser: any = {};
    switch (locale) {
      case 'en-GB':
        localiser = enGB;
        break;
      case 'nl-NL':
        localiser = nlNL;
        break;
      default:
        localiser = enGB;
    }
    for (const key in localiser) {
      this._strings[key] = localiser[key];
    }
    return true;
  }

  static getString(key: enKey, fallBack = '') {
    if (Object.prototype.hasOwnProperty.call(enGB, key)) {
      const englishFallBack: string = enGB[key];
      fallBack = fallBack === '' ? englishFallBack : fallBack;
    }
    return this._strings[key] || fallBack;
  }
}
