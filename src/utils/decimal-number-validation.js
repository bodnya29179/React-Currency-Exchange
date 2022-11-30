import { DECIMAL_SEPARATOR, NAVIGATION_KEYS } from '../constants/keyboard-keys';

const DECIMAL_NUMBER_REGEX = /^[0-9]\d*\.?\d*$/;

export function isInputKeyValid(inputValue, keyEvent) {
  if (
    NAVIGATION_KEYS.indexOf(keyEvent.key) > -1 // Allow: navigation keys: backspace, delete, arrows etc.
    || ((keyEvent.key === 'a' || keyEvent.code === 'KeyA') && keyEvent.ctrlKey === true) // Allow: Ctrl+A
    || ((keyEvent.key === 'c' || keyEvent.code === 'KeyC') && keyEvent.ctrlKey === true) // Allow: Ctrl+C
    || ((keyEvent.key === 'v' || keyEvent.code === 'KeyV') && keyEvent.ctrlKey === true) // Allow: Ctrl+V
    || ((keyEvent.key === 'x' || keyEvent.code === 'KeyX') && keyEvent.ctrlKey === true) // Allow: Ctrl+X
    || ((keyEvent.key === 'a' || keyEvent.code === 'KeyA') && keyEvent.metaKey === true) // Allow: Cmd+A (Mac)
    || ((keyEvent.key === 'c' || keyEvent.code === 'KeyC') && keyEvent.metaKey === true) // Allow: Cmd+C (Mac)
    || ((keyEvent.key === 'v' || keyEvent.code === 'KeyV') && keyEvent.metaKey === true) // Allow: Cmd+V (Mac)
    || ((keyEvent.key === 'x' || keyEvent.code === 'KeyX') && keyEvent.metaKey === true) // Allow: Cmd+X (Mac)
  ) {
    return true;
  }

  if (keyEvent.key === DECIMAL_SEPARATOR) {
    if (!inputValue) {
      return false;
    }

    return inputValue.split(DECIMAL_SEPARATOR).length <= 1;
  }

  return DECIMAL_NUMBER_REGEX.test(keyEvent.key);
}
