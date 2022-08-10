import {Offer} from './types/offer';

const sortByPriceToLow = (offerA:Offer, offerB:Offer) => offerB.price - offerA.price;
const sortByPriceToHigh = (offerA:Offer, offerB:Offer) => offerA.price - offerB.price;
const sortByRating = (offerA:Offer, offerB:Offer) => offerB.rating - offerA.rating;

export {sortByPriceToLow, sortByPriceToHigh, sortByRating};
