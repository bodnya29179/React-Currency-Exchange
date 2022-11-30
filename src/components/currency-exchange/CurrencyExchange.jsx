import React, { useEffect, useState } from 'react';
import classes from './CurrencyExchange.module.scss';
import CurrencySelect from '../currency-select/CurrencySelect';
import CurrencyInput from '../currency-input/CurrencyInput';
import CustomButton from '../custom-button/CustomButton';
import { CURRENCIES, CURRENCY_RATES } from '../../constants';
import { buildExchangeLabel, buildRateKey } from '../../utils';

const CurrencyExchange = () => {
  const [currencyFrom, setCurrencyFrom] = useState(CURRENCIES.uah);
  const [currencyTo, setCurrencyTo] = useState(CURRENCIES.usd);

  const [labelFrom, setLabelFrom] = useState();
  const [labelTo, setLabelTo] = useState();

  const [amountFrom, setAmountFrom] = useState();
  const [amountTo, setAmountTo] = useState();

  const reverseCurrencies = () => {
    const from = currencyFrom;
    const to = currencyTo;

    setCurrencyFrom(to);
    setCurrencyTo(from);
  };

  const currencyFromChange = (amount) => {
    setAmountFrom(amount);

    if (!amount) {
      setAmountTo('');
    } else {
      const rate = currencyFrom === currencyTo ? 1 : CURRENCY_RATES[buildRateKey(currencyFrom, currencyTo)];
      const amountTo = amount * rate;

      setAmountTo(amountTo);
    }
  };

  const currencyToChange = (amount) => {
    setAmountTo(amount);

    if (!amount) {
      setAmountFrom('');
    } else {
      const rate = CURRENCY_RATES[buildRateKey(currencyTo, currencyFrom)];
      const amountFrom = amount * rate;

      setAmountFrom(amountFrom);
    }
  };

  useEffect(() => {
    setLabelFrom(buildExchangeLabel(currencyFrom, currencyTo));
    setLabelTo(buildExchangeLabel(currencyTo, currencyFrom));

    currencyFromChange(amountFrom);
  }, [currencyFrom, currencyTo]);

  return (
    <div className={classes.container}>
      <div className={classes.currencyExchange}>
        <CurrencySelect
          items={CURRENCIES}
          defaultSelectedValue={currencyFrom}
          itemClickCallback={(currency) => setCurrencyFrom(currency)}
        />

        <CurrencyInput
          label={labelFrom}
          currentValue={amountFrom}
          valueChangeCallback={currencyFromChange}
        />
      </div>

      <div className={classes.reverseBtn}>
        <CustomButton clickCallback={reverseCurrencies}/>
      </div>

      <div className={classes.currencyExchange}>
        <CurrencySelect
          items={CURRENCIES}
          defaultSelectedValue={currencyTo}
          itemClickCallback={(currency) => setCurrencyTo(currency)}
        />

        <CurrencyInput
          label={labelTo}
          currentValue={amountTo}
          valueChangeCallback={currencyToChange}
        />
      </div>
    </div>
  );
};

export default CurrencyExchange;
