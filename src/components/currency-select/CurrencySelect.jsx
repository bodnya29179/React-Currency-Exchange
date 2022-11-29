import React, { useEffect, useState } from 'react';
import classes from './CurrencySelect.module.scss';

const CurrencySelect = ({ items, itemClickCallback, selectedIndex = 0 }) => {
  const numberOfItems = Object.values(items).length;

  const [inputValues, setInputValues] = useState(
    Array(numberOfItems).fill(false)
  );

  const itemClick = (value, inputIndex) => {
    changeInputValues(inputIndex);
    itemClickCallback(value);
  }

  const changeInputValues = (inputIndex) => {
    const newValues = inputValues.map((_, index) => {
      return index === inputIndex;
    });

    setInputValues(newValues);
  };

  useEffect(() => {
    const isNonExistentIndex = selectedIndex >= numberOfItems;

    changeInputValues(isNonExistentIndex ? 0 : selectedIndex);
  }, []);

  return (
    <div
      className={classes.container}
      style={{ gridTemplateColumns: Array(numberOfItems).fill('1fr').join(' ') }}
    >
      {
        Object.keys(items)
          .map((key, index) => (
            <label key={key} className={classes.currencyItem}>
              {items[key]}

              <input
                name="currency"
                type="radio"
                value={items[key]}
                checked={inputValues[index]}
                onChange={itemClick.bind(this, items[key], index)}
              />
            </label>
          ))
      }
    </div>
  );
};

export default CurrencySelect;
