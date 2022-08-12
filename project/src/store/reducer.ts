import {createReducer} from '@reduxjs/toolkit';
import {CITY} from '../mocks/city';
import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {changeCity, getOffers, changeOffers} from '../store/action';

const getOfferByCity = () => offers.filter((offer)=>offer.city.name === CITY[0].name );
const offerByCity = getOfferByCity();

const initialState = {
  city: CITY[0],
  offers: offerByCity,
  reviews: reviews
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
    });
}

);

export {reducer};
