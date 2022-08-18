import {Offer} from './types/offer';

const sortByPriceToLow = (offerA:Offer, offerB:Offer) => offerB.price - offerA.price;
const sortByPriceToHigh = (offerA:Offer, offerB:Offer) => offerA.price - offerB.price;
const sortByRating = (offerA:Offer, offerB:Offer) => offerB.rating - offerA.rating;
function getRandomInteger(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {sortByPriceToLow, sortByPriceToHigh, sortByRating, getRandomInteger};
