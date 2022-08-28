import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {AuthorizationStatus, AppRoute} from '../const';
import {City} from '../types/map';

export const changeCity = createAction<City>('main/changeCity');

export const getOffersByCity = createAction<City>('main/getOffersByCity');

export const changeOffersByCity = createAction<Offer[]>('main/changeOffersByCity');


export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const changeOffers = createAction<Offer>('main/changeOffers');

export const loadOffer = createAction<Offer>('data/loadOffer');


export const loadOffersNearby = createAction<Offer[]>('data/loadOffersNearby');

export const loadReveiws = createAction<Review[]>('data/loadReveiws');


export const addFavorite = createAction<Offer>('favorite/addFavorite');

export const loadFavorites = createAction<Offer[]>('favorite/loadFavorites');

export const clearFavorites = createAction('favorite/clearFavorites');

export const deleteFavorites = createAction<string>('favorite/deleteFavorites');


export const setUserEmail = createAction<string>('user/setUserEmail');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('main/setError');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
