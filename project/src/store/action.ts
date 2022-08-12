import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('main/changeCity', (cityName) => ({
  payload: cityName,
}) );

export const getOffers = createAction('main/getOffers', (cityName) => ({
  payload: cityName,
}));

export const changeOffers = createAction('main/changeOffers', (newOffers) => ({
  payload: newOffers,
}));

