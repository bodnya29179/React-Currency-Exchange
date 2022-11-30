import React, { useEffect, useState } from 'react';
import classes from './CurrencyInput.module.scss';
import { isInputKeyValid, toFixed } from '../../utils';
import { DECIMAL_SEPARATOR } from '../../constants';

const CurrencyInput = ({ label, currentValue = '', valueChangeCallback }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputKey = (event) => {
    const isValid = isInputKeyValid(inputValue, event);

    if (!isValid) {
      event.preventDefault();
    }
  };

  const inputChange = (event) => {
    let value = event.target.value;
    const isSeparatorFirst = value[0] === DECIMAL_SEPARATOR;
    value = isSeparatorFirst ? value.slice(1): value;
    value = toFixed(value);

    setInputValue(value);
    valueChangeCallback(value);
  }

  useEffect(() => {
    const value = toFixed(currentValue.toString());
    setInputValue(value);
  }, [currentValue]);

  return (
    <div className={classes.container}>
      <input
        className={classes.amount}
        type="text"
        value={inputValue}
        onKeyDown={handleInputKey}
        onChange={inputChange}
      />

      <span className={classes.label}>{label}</span>
    </div>
  );
};

export default CurrencyInput;
