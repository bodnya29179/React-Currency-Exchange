import React from 'react';
import { HiOutlineArrowsRightLeft } from 'react-icons/hi2';
import classes from './CustomButton.module.scss';
// import './CustomButton.modules.scss';

const CustomButton = () => {
  return (
    <button className={classes.btn}>
      <HiOutlineArrowsRightLeft/>
    </button>
  );
};

export default CustomButton;
