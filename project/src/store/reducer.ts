import {createReducer} from '@reduxjs/toolkit';
import {CITY} from '../mocks/city';
import {offers} from '../mocks/offers';
import {changeCity, getOffers} from '../store/action';

const getOfferByCity = () => offers.filter((offer)=>offer.city.name === CITY[0].name );
const offerByCity = getOfferByCity();

const initialState = {
  city: CITY[0],
  offers: offerByCity
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = offers.filter((offer)=>offer.city.name === action.payload.name );
    });
}

);

export {reducer};
