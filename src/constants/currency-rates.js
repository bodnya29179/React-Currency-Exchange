import { CURRENCIES } from './currencies';
import { buildRateKey } from '../utils/build-rate-key';

export const CURRENCY_RATES = Object.freeze({
  [buildRateKey(CURRENCIES.uah, CURRENCIES.usd)]: 0.027,
  [buildRateKey(CURRENCIES.uah, CURRENCIES.eur)]: 0.026,
  [buildRateKey(CURRENCIES.eur, CURRENCIES.uah)]: 38.05,
  [buildRateKey(CURRENCIES.usd, CURRENCIES.uah)]: 36.79,
  [buildRateKey(CURRENCIES.usd, CURRENCIES.eur)]: 0.97,
  [buildRateKey(CURRENCIES.eur, CURRENCIES.usd)]: 1.03,
});
