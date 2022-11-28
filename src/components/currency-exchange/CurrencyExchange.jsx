import React from 'react';
import CurrencySelect from '../currency-select/CurrencySelect';
import { CURRENCIES } from '../../constants';

const CurrencyExchange = () => {
  return (
    <div>
      <CurrencySelect items={CURRENCIES} selectedIndex={2} itemClickCallback={(val) => console.log('value = ', val)}/>
    </div>
  );
};

export default CurrencyExchange;
