import {createReducer} from '@reduxjs/toolkit';
// import {CITY} from '../mocks/city';
import {CITIES} from '../const';
import {offers} from '../mocks/offers';
import {changeCity, getOffers} from '../store/action';

const initialState = {
  city: CITIES[0],
  offers: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = offers.filter((offer)=>offer.city.name === action.payload );
    });
}

);

export {reducer};
