import { CURRENCY_RATES } from '../constants/currency-rates';
import { buildRateKey } from './build-rate-key';

export function buildExchangeLabel(currencyFrom, currencyTo) {
  if (currencyFrom === currencyTo) {
    return `1 ${ currencyFrom } = 1 ${ currencyTo }`;
  }

  return `1 ${ currencyFrom } = ${ CURRENCY_RATES[buildRateKey(currencyFrom, currencyTo)] } ${ currencyTo }`;
}
