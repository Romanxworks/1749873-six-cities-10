import {NameSpace} from '../../const';
import {Review} from '../../types/review';
import {Offer} from '../../types/offer';
import {State} from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer => state[NameSpace.Data].offer;
export const getOffersNearby = (state: State): Offer[] => state[NameSpace.Data].offersNearby;
export const getFavorites = (state: State): Offer[] => state[NameSpace.Data].favorites;
export const getFavoriteCount = (state: State): number => state[NameSpace.Data].favoriteCount;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getIsReviewSubmit = (state: State): boolean => state[NameSpace.Data].isReviewSubmit;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
