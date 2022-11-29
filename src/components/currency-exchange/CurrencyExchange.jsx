import React, { useEffect, useState } from 'react';
import classes from './CurrencyExchange.module.scss';
import CurrencySelect from '../currency-select/CurrencySelect';
import CurrencyInput from '../currency-input/CurrencyInput';
import { CURRENCIES } from '../../constants';
import { buildExchangeLabel } from '../../utils';

const CurrencyExchange = () => {
  const [currencyFrom, setCurrencyFrom] = useState(CURRENCIES.uah);
  const [currencyTo, setCurrencyTo] = useState(CURRENCIES.usd);

  const [labelFrom, setLabelFrom] = useState();
  const [labelTo, setLabelTo] = useState();

  useEffect(() => {
    setLabelFrom(buildExchangeLabel(currencyFrom, currencyTo));
    setLabelTo(buildExchangeLabel(currencyTo, currencyFrom));
  }, [currencyFrom, currencyTo]);

  return (
    <div className={classes.container}>
      <div className={classes.currencyExchange}>
        <CurrencySelect
          items={CURRENCIES}
          defaultSelectedValue={currencyFrom}
          itemClickCallback={(currency) => setCurrencyFrom(currency)}
        />

        <CurrencyInput label={labelFrom}/>
      </div>

      <div className={classes.currencyExchange}>
        <CurrencySelect
          items={CURRENCIES}
          defaultSelectedValue={currencyTo}
          itemClickCallback={(currency) => setCurrencyTo(currency)}
        />

        <CurrencyInput label={labelTo}/>
      </div>
    </div>
  );
};

export default CurrencyExchange;
