import {createSlice} from '@reduxjs/toolkit';
import {AppRoute, NameSpace} from '../../const';
import {OffersData} from '../../types/state';
import {
  fetchOffersAction,
  fetchOfferAction,
  fetchOffersNearbyAction,
  fetchReviewsAction,
  postReviewAction,
  fetchFavoriteAction,
  fetchSetFavoriteAction
} from '../api-actions';
import {BLANK_OFFER} from '../../const';
import {redirectToRoute} from '../action';

const initialState: OffersData = {
  offers: [],
  offersNearby: [],
  offer: BLANK_OFFER,
  favorites: [],
  favoriteCount: 0,
  reviews: [],
  isReviewSubmit: false,
  isDataLoaded: false,

};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeOffer: (state, action) => {
      state.offer = action.payload;
      const id = state.offers.findIndex((offer)=> offer.id === action.payload.id);
      state.offers = [...state.offers.slice(0,id), action.payload, ...state.offers.slice(id + 1)];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.rejected, (state,action) => {
        state.isDataLoaded = false;
        redirectToRoute(AppRoute.Error);
      })
      .addCase(fetchOffersAction.fulfilled, (state,action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isDataLoaded = true;
        redirectToRoute(AppRoute.Error);
      })
      .addCase(fetchOfferAction.fulfilled, (state,action) => {
        state.offer = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state,action) => {
        state.offersNearby = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state,action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.isReviewSubmit = false;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.isReviewSubmit = true;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.isReviewSubmit = false;
      })
      .addCase(fetchFavoriteAction.fulfilled, (state,action) => {
        state.favorites = action.payload;
        state.favoriteCount = state.favorites.length;
      })
      .addCase(fetchSetFavoriteAction.fulfilled, (state,action) => {
        const id = state.offers.findIndex((offer)=> offer.id === action.payload.id);
        state.offers = [...state.offers.slice(0,id), action.payload, ...state.offers.slice(id + 1)];
        if(action.payload.isFavorite){
          state.favorites = state.favorites.concat(action.payload);
        }else{
          state.favorites = state.favorites.filter((favorite) =>favorite.id !== action.payload.id);
        }
        state.favoriteCount = state.favorites.length;

      });
  }
});

export const {changeOffer} = offersData.actions;
