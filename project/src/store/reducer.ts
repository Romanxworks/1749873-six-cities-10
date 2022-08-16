import {createReducer} from '@reduxjs/toolkit';
import {CITY} from '../mocks/city';
import {City} from '../types/map';
// import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {AuthorizationStatus} from '../const';
// import {User} from '../types/user';
import {changeCity, getOffers, changeOffers, changeSelectedOffer, loadOffers, requireAuthorization, setError} from '../store/action';

// const getOfferByCity = () => offers.filter((offer)=>offer.city.name === CITY[0].name );
// const offersByCity = getOfferByCity();

type InitialState = {
  city: City,
  offers:Offer[],
  selectedOffer: Offer | null,
  reviews: Review[],
  favoriteCount: number,
  authorizationStatus: AuthorizationStatus,
  error: string | null
};

const initialState: InitialState = {
  city: CITY[0],
  offers: [],
  selectedOffer: null,
  reviews: reviews,
  favoriteCount: 3,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = state.offers.filter((offer)=>offer.city.name === action.payload.name);
    })
    .addCase(changeOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
}

);

export {reducer};
