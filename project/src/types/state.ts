import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const';
import {Offer} from './offer.js';
import {Review} from './review.js';
import {City} from './map.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
    authorizationStatus: AuthorizationStatus,
    email: string
    isLogin: boolean,
};

export type OffersData = {
    offers: Offer[],
    offersNearby: Offer[],
    offer: Offer,
    reviews: Review[],
    favorites: Offer[],
    favoriteCount: number,
    isReviewSubmit: boolean,
    isDataLoaded: boolean,
};

export type MainProcess = {
    city: City,
    offersByCity: Offer[],
}

