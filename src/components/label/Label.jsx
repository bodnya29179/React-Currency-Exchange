import React from 'react';
import classes from './Label.module.scss';

const Label = ({ text }) => {
  return (
    <span className={classes.label}>{text}</span>
  );
};

export default Label;
