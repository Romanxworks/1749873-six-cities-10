import {createReducer} from '@reduxjs/toolkit';
import {CITY} from '../mocks/city';
import {City} from '../types/map';
import {Offer} from '../types/offer';
// import {Review} from '../types/review';
import {AuthorizationStatus} from '../const';
// import {User} from '../types/user';
import {changeCity,
  getOffers,
  changeOffers,
  changeSelectedOffer,
  loadOffers,
  requireAuthorization,
  setError,
  setDataLoadedStatus} from '../store/action';


type InitialState = {
  city: City,
  offers:Offer[],
  selectedOffer: Offer | null,
  favoriteCount: number,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  isDataLoaded: boolean
};

const initialState: InitialState = {
  city: CITY[0],
  offers: [],
  selectedOffer: null,
  favoriteCount: 3,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false
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
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
}

);

export {reducer};
