import {NameSpace, NameCities} from '../../const';
import {createSelector} from '@reduxjs/toolkit';
import {City} from '../../types/map';
import {State} from '../../types/state';
import {getOffers} from '../offers-data/selectors';
import {Offer} from '../../types/offer';

export const getCity = (state: State): City => state[NameSpace.Main].city;
export const getOffersByCity = (state: State): Offer[] => state[NameSpace.Main].offersByCity;

export const getOffersByCityName = createSelector(
  [getCity, getOffers],
  (city, offers) => {
    switch (city.name) {
      case NameCities.Paris:
        return offers.filter((offer) => offer.city.name === NameCities.Paris);
      case NameCities.Amsterdam:
        return offers.filter((offer) => offer.city.name === NameCities.Amsterdam);
      case NameCities.Hamburg:
        return offers.filter((offer) => offer.city.name === NameCities.Hamburg);
      case NameCities.Cologne:
        return offers.filter((offer) => offer.city.name === NameCities.Cologne);
      case NameCities.Dusseldorf:
        return offers.filter((offer) => offer.city.name === NameCities.Dusseldorf);
      case NameCities.Brussels:
        return offers.filter((offer) => offer.city.name === NameCities.Brussels);
      default:
        return offers;
    }
  }
);
