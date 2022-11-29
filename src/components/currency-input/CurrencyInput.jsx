import React from 'react';
import classes from './CurrencyInput.module.scss';

const CurrencyInput = ({ label }) => {
  return (
    <div className={classes.container}>
      <input className={classes.amount} type="text"/>
      <span className={classes.label}>{label}</span>
    </div>
  );
};

export default CurrencyInput;
