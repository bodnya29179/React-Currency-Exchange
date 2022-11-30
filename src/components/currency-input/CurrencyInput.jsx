import React, { useState } from 'react';
import classes from './CurrencyInput.module.scss';
import { isInputKeyValid } from '../../utils';
import { DECIMAL_SEPARATOR } from '../../constants';

const CurrencyInput = ({ label }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputKey = (event) => {
    const isValid = isInputKeyValid(inputValue, event);

    if (!isValid) {
      event.preventDefault();
    }
  };

  const inputChange = (event) => {
    const value = event.target.value;
    const isSeparatorFirst = value[0] === DECIMAL_SEPARATOR;

    setInputValue(isSeparatorFirst ? value.slice(1): value);
  }

  return (
    <div className={classes.container}>
      <input
        className={classes.amount}
        type="number"
        min="0"
        value={inputValue}
        onKeyDown={handleInputKey}
        onChange={inputChange}
      />

      <span className={classes.label}>{label}</span>
    </div>
  );
};

export default CurrencyInput;
