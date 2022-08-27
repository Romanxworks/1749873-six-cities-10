import {createReducer} from '@reduxjs/toolkit';
import {City} from '../types/map';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {AuthorizationStatus, CITY, BLANK_OFFER} from '../const';
import {changeCity,
  getOffersByCity,
  changeOffersByCity,
  changeSelectedOffer,
  changeOffers,
  loadOffers,
  loadOffer,
  loadReveiws,
  requireAuthorization,
  setError,
  setDataLoadedStatus,
  loadOffersNearby,
  loadFavorites,
  setUserEmail,
  clearFavorites,
  deleteFavorites,
  addFavorite
} from '../store/action';


type InitialState = {
  city: City,
  offers: Offer[],
  email: string,
  offersNearby: Offer[],
  id: string | undefined,
  offersByCity: Offer[],
  offer: Offer,
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
  offer: BLANK_OFFER,
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
    .addCase(changeOffersByCity, (state, action) => {
      state.offersByCity = action.payload;
    })
    .addCase(changeSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(changeOffers, (state, action) => {
      const id = state.offers.findIndex((offer)=> offer.id === action.payload.id);
      state.offers = [...state.offers.slice(0,id), action.payload, ...state.offers.slice(id + 1)];
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
    .addCase(addFavorite, (state, action) => {
      state.favorites = state.favorites.concat(action.payload);
      state.favoriteCount = state.favorites.length;
    })
    .addCase(clearFavorites, (state) => {
      state.favorites = [];
      state.favoriteCount = 0;
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
