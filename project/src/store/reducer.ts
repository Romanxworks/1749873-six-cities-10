import {createReducer} from '@reduxjs/toolkit';
import {CITY} from '../mocks/city';
import {City} from '../types/map';
import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
// import {User} from '../types/user';
import {changeCity, getOffers, changeOffers, changeSelectedOffer, setFavoriteOffer} from '../store/action';

const getOfferByCity = () => offers.filter((offer)=>offer.city.name === CITY[0].name );
const offersByCity = getOfferByCity();

type InitialState = {
  city: City,
  offers:Offer[],
  selectedOffer: Offer,
  reviews: Review[],
  favoriteCount: number
};

const initialState: InitialState = {
  city: CITY[0],
  offers:offersByCity,
  selectedOffer: offersByCity[0],
  reviews: reviews,
  favoriteCount: 3
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = offers.filter((offer)=>offer.city.name === action.payload.name );
    })
    .addCase(changeOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(setFavoriteOffer, (state, action) => {
      state.selectedOffer.isFavorite = action.payload;
      const index = state.offers.findIndex((offer) =>offer.id === state.selectedOffer.id);
      state.offers = [
        ...state.offers.slice(0, index),
        state.selectedOffer,
        ...state.offers.slice(index + 1),
      ];
    });
}

);

export {reducer};
