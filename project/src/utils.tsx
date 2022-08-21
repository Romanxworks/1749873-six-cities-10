import {Offer} from './types/offer';
import dayjs from 'dayjs';
import {Review} from './types/review';

const sortByPriceToLow = (offerA:Offer, offerB:Offer) => offerB.price - offerA.price;

const sortByPriceToHigh = (offerA:Offer, offerB:Offer) => offerA.price - offerB.price;

const sortByRating = (offerA:Offer, offerB:Offer) => offerB.rating - offerA.rating;

const sortByDate = (reviewA:Review, reviewB:Review) => {
  if(dayjs(reviewB.date).isBefore(dayjs(reviewA.date))){
    return -1;
  }
  if(dayjs(reviewB.date).isAfter(dayjs(reviewA.date))){
    return 1;
  }
  return 0;
};

const getReviewDate = (date:string) => dayjs(date).format('MMMM  YYYY');

const getRandomInteger = (min:number, max:number) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {sortByPriceToLow, sortByPriceToHigh, sortByRating, getRandomInteger, sortByDate, getReviewDate};
