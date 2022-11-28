import React from 'react';
import { CURRENCIES } from '../../constants';

const CurrencySelect = () => {
  return (
    <div>
      {
        Object.keys(CURRENCIES)
          .map((key) => (
            <label>
              {CURRENCIES[key]}
              <input key={key} name="currency" type="radio" value={CURRENCIES[key]}/>
            </label>
          ))
      }
    </div>
  );
};

export default CurrencySelect;
