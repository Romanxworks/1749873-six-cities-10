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

export const changeSelectedOffer = createAction('main/changeSelectedOffer', (newOffer) => ({
  payload: newOffer,
}));

export const setFavoriteOffer = createAction('property/setFavoriteOffer', (isFavorite) => ({
  payload: isFavorite,
}));

export const getFavoriteCount = createAction('property/getFavoriteCount');
