import {createReducer} from '@reduxjs/toolkit';
import {CITY} from '../mocks/city';
import {City} from '../types/map';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {AuthorizationStatus} from '../const';
import {changeCity,
  getOffersByCity,
  changeOffers,
  changeSelectedOffer,
  loadOffers,
  loadOffer,
  loadReveiws,
  requireAuthorization,
  setError,
  setDataLoadedStatus,
  setIdOffer,
  loadOffersNearby,
  loadFavorites,
  setUserEmail,
  clearFavorites,
  changeFavorites,
  deleteFavorites
} from '../store/action';


type InitialState = {
  city: City,
  offers: Offer[],
  email: string,
  offersNearby: Offer[],
  id: string | undefined,
  offersByCity: Offer[],
  offer: Offer | null,
  reviews: Review[],
  favorites: Offer[],
  isFavorite: boolean | undefined;
  selectedOffer: Offer | null,
  favoriteCount: number,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  isDataLoaded: boolean
};

const initialState: InitialState = {
  city: CITY[0],
  offers: [],
  offersNearby: [],
  offersByCity: [],
  selectedOffer: null,
  offer: null,
  email: '',
  reviews: [],
  favorites: [],
  isFavorite: false,
  id: '',
  favoriteCount: 0,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffersByCity, (state, action) => {
      state.offersByCity = state.offers.filter((offer)=>offer.city.name === action.payload.name);
    })
    .addCase(changeOffers, (state, action) => {
      state.offersByCity = action.payload;
    })
    .addCase(changeSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(setIdOffer, (state, action) => {
      state.id = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.offersByCity = state.offers.filter((offer)=>offer.city.name === state.city.name);
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
      state.favoriteCount = action.payload.length;
    })
    .addCase(deleteFavorites, (state, action) => {
      const id = Number(action.payload);
      state.favorites = state.favorites.filter((favorite) =>favorite.id !== id) ;
      state.favoriteCount = state.favorites.length;
    })
    .addCase(clearFavorites, (state) => {
      state.favorites = [];
      state.favoriteCount = 0;
    })
    .addCase(changeFavorites, (state, action) => {
      state.isFavorite = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadReveiws, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
}

);

export {reducer};
