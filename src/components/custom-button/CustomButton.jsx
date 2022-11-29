import React from 'react';
import { HiOutlineArrowsRightLeft } from 'react-icons/hi2';
import classes from './CustomButton.module.scss';

const CustomButton = ({ clickCallback }) => {
  return (
    <button className={classes.btn} onClick={clickCallback}>
      <HiOutlineArrowsRightLeft/>
    </button>
  );
};

export default CustomButton;
