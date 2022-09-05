import {changeOffer, offersData} from './offers-data';
import {OffersData} from '../../types/state';
import {BLANK_OFFER} from '../../const';
import {
  fetchOffersAction,
  fetchOfferAction,
  fetchOffersNearbyAction,
  fetchReviewsAction,
  postReviewAction,
  fetchFavoriteAction,
  fetchSetFavoriteAction
} from '../api-actions';
import {makeFakeOffer, makeFakeReview} from '../../mocks';

const mockOffer = makeFakeOffer();
const mockOffers = Array.from({length: 3}, makeFakeOffer);
const mockReviews = Array.from({length: 3}, makeFakeReview);
describe('Reducer: offersData', () => {
  let state: OffersData;

  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      });
  });

  it('should updated the offer and offers', () => {
    state = {
      offers: [mockOffer],
      offersNearby: [],
      offer: BLANK_OFFER,
      reviews: [],
      favorites: [],
      favoriteCount: 0,
      isReviewSubmit: false,
      isDataLoaded: false,
    };
    expect(offersData.reducer(state, changeOffer(mockOffer)))
      .toEqual({
        offers: [mockOffer],
        offersNearby: [],
        offer: mockOffer,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      });
  });

  describe('fetchOffersAction test', () => {
    beforeEach(() => {
      state = {
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      };
    });
    it('should update isDataLoaded if fetchOffersAction pending', () => {
      expect(offersData.reducer(state, {type: fetchOffersAction.pending.type}))
        .toEqual({
          offers: [],
          offersNearby: [],
          offer: BLANK_OFFER,
          reviews: [],
          favorites: [],
          favoriteCount: 0,
          isReviewSubmit: false,
          isDataLoaded: true,
        });
    });

    it('should update isDataLoaded if fetchOffersAction rejected', () => {
      expect(offersData.reducer(state, {type: fetchOffersAction.rejected.type}))
        .toEqual({
          offers: [],
          offersNearby: [],
          offer: BLANK_OFFER,
          reviews: [],
          favorites: [],
          favoriteCount: 0,
          isReviewSubmit: false,
          isDataLoaded: false,
        });
    });

    it('should update isDataLoaded and offers if fetchOffersAction fulfilled', () => {expect(offersData.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: mockOffers}))
      .toEqual({
        offers: mockOffers,
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      });
    });
  });

  describe('fetchOfferAction test', () => {
    beforeEach(() => {
      state = {
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      };
    });
    it('should update isDataLoaded if fetchOfferAction pending', () => {
      expect(offersData.reducer(state, {type: fetchOfferAction.pending.type}))
        .toEqual({
          offers: [],
          offersNearby: [],
          offer: BLANK_OFFER,
          reviews: [],
          favorites: [],
          favoriteCount: 0,
          isReviewSubmit: false,
          isDataLoaded: true,
        });
    });

    it('should update isDataLoaded if fetchOfferAction rejected', () => {
      expect(offersData.reducer(state, {type: fetchOfferAction.rejected.type}))
        .toEqual({
          offers: [],
          offersNearby: [],
          offer: BLANK_OFFER,
          reviews: [],
          favorites: [],
          favoriteCount: 0,
          isReviewSubmit: false,
          isDataLoaded: true,
        });
    });

    it('should update isDataLoaded and offer if fetchOfferAction fulfilled', () => {expect(offersData.reducer(state, {type: fetchOfferAction.fulfilled.type, payload: mockOffer}))
      .toEqual({
        offers: [],
        offersNearby: [],
        offer: mockOffer,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      });
    });
  });

  describe('fetchOffersNearbyAction test', () => {
    beforeEach(() => {
      state = {
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      };
    });
    it('should update isDataLoaded if fetchOffersNearbyAction pending', () => {
      expect(offersData.reducer(state, {type: fetchOffersNearbyAction.pending.type}))
        .toEqual({
          offers: [],
          offersNearby: [],
          offer: BLANK_OFFER,
          reviews: [],
          favorites: [],
          favoriteCount: 0,
          isReviewSubmit: false,
          isDataLoaded: true,
        });
    });

    it('should update isDataLoaded and offersNearby if fetchOffersNearbyAction fulfilled', () => {expect(offersData.reducer(state, {type: fetchOffersNearbyAction.fulfilled.type, payload: mockOffers}))
      .toEqual({
        offers: [],
        offersNearby: mockOffers,
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      });
    });
  });

  describe('fetchReviewsAction test', () => {
    beforeEach(() => {
      state = {
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      };
    });
    it('should update reviews if fetchReviewsAction fulfilled', () => {expect(offersData.reducer(state, {type: fetchReviewsAction.fulfilled.type, payload: mockReviews}))
      .toEqual({
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: mockReviews,
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      });
    });
  });

  describe('postReviewAction test', () => {
    beforeEach(() => {
      state = {
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      };
    });
    it('should update isReviewSubmit if postReviewAction fulfilled', () => {expect(offersData.reducer(state, {type: postReviewAction.fulfilled.type}))
      .toEqual({
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      });
    });

    it('should update isReviewSubmit if postReviewAction pending', () => {expect(offersData.reducer(state, {type: postReviewAction.pending.type}))
      .toEqual({
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: true,
        isDataLoaded: false,
      });
    });

    it('should update isReviewSubmit if postReviewAction rejected', () => {expect(offersData.reducer(state, {type: postReviewAction.rejected.type}))
      .toEqual({
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      });
    });
  });

  describe('fetchSetFavoriteAction test', () => {

    const favoriteMockOffer = {...mockOffer, isFavorite: true};
    it('should update offers, favoriteCount and favorites if fetchSetFavoriteAction fulfilled', () => {
      state = {
        offers: [mockOffer],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      };
      expect(offersData.reducer(state, {type: fetchSetFavoriteAction.fulfilled.type, payload: favoriteMockOffer}))
        .toEqual({
          offers: [favoriteMockOffer],
          offersNearby: [],
          offer: BLANK_OFFER,
          reviews: [],
          favorites: [favoriteMockOffer],
          favoriteCount: 1,
          isReviewSubmit: false,
          isDataLoaded: false,
        });
    });

    it('should update offers, favoriteCount and favorites if fetchSetFavoriteAction fulfilled and isFavorite = FALSE', () => {
      state = {
        offers: [favoriteMockOffer],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [favoriteMockOffer],
        favoriteCount: 1,
        isReviewSubmit: false,
        isDataLoaded: false,
      };

      expect(offersData.reducer(state, {type: fetchSetFavoriteAction.fulfilled.type, payload: mockOffer}))
        .toEqual({
          offers: [mockOffer],
          offersNearby: [],
          offer: BLANK_OFFER,
          reviews: [],
          favorites: [],
          favoriteCount: 0,
          isReviewSubmit: false,
          isDataLoaded: false,
        });
    });
  });

  describe('fetchFavoriteAction test', () => {
    beforeEach(() => {
      state = {
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: [],
        favoriteCount: 0,
        isReviewSubmit: false,
        isDataLoaded: false,
      };
    });
    it('should update favorites if fetchFavoriteAction fulfilled', () => {expect(offersData.reducer(state, {type: fetchFavoriteAction.fulfilled.type, payload: mockOffers}))
      .toEqual({
        offers: [],
        offersNearby: [],
        offer: BLANK_OFFER,
        reviews: [],
        favorites: mockOffers,
        favoriteCount: mockOffers.length,
        isReviewSubmit: false,
        isDataLoaded: false,
      });
    });
  });
});
