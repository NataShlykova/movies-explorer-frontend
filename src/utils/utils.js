import {
  TWELVE,
  EIGHT,
  FIVE,
  TWO,
  THREE,
  BIG_SCREEN,
  MEDIUM_SCREEN,
  SMALL_SCREEN,
} from './constants';

export function setLocalStorage(item, value) {
  localStorage.setItem(item, JSON.stringify(value));
};

function isString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function getLocalStorage(key) {
  const isJson = isString(localStorage.getItem(key));
  if (isJson) {
    return JSON.parse(localStorage.getItem(key));
  }
  return localStorage.getItem(key);
};

export const getMovieCards = () => {
  const innerWidth = window.innerWidth;
  if (innerWidth <= SMALL_SCREEN) {
    return FIVE;
  } else if (innerWidth <= MEDIUM_SCREEN) {
    return EIGHT;
  } else if (innerWidth <= BIG_SCREEN) {
    return TWELVE;
  } else if (innerWidth > BIG_SCREEN) {
    return TWELVE;
  }
}

export const addMovieCards = () => {
  const innerWidth = window.innerWidth;
  if (innerWidth <= SMALL_SCREEN) {
    return TWO;
  } else if (innerWidth <= MEDIUM_SCREEN) {
    return TWO;
  } else if (innerWidth <= BIG_SCREEN) {
    return TWO;
  } else {
    return THREE;
  }
}

export const changeMinToHour = (item) => {
  const minute = item % 60;
  const hour = (item - minute) / 60;
  if (hour === 0) {
    return `${minute}m`;
  } else if (minute === 0) {
    return `${hour}ч`;
  } else {
    return `${hour}ч ${minute}m`;
  }
}
