import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {checkAuthAction, loginAction, fetchFavoriteAction, logoutAction, fetchOffersAction, fetchOfferAction, fetchOffersNearbyAction, fetchReviewsAction, postReviewAction, fetchSetFavoriteAction} from './api-actions';
import {APIRoute} from '../const';
import {State} from '../types/state';
import {AuthData, CommentData} from '../types/user';
import {FavoriteData} from '../types/review';
import {redirectToRoute} from './action';
import { makeFakeOffer, makeFakeReview } from '../mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      fetchFavoriteAction.pending.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-city-22-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      redirectToRoute.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-city-22-token');
  });

  it('should dispatch Load_Offers when GET /hotels', async () => {
    const mockOffers = Array.from({length: 3}, makeFakeOffer);
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, mockOffers);

    const store = mockStore();

    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Offer when GET /hotels/id', async () => {
    const mockOffer = makeFakeOffer();
    const mockId = '1';
    mockAPI
      .onGet(`${APIRoute.Offers}/${mockId}`)
      .reply(200, mockOffer);

    const store = mockStore();

    await store.dispatch(fetchOfferAction(mockId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOfferAction.pending.type,
      fetchOfferAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_OffersNearby when GET /hotels/id/nearby', async () => {
    const mockOffers = Array.from({length: 3}, makeFakeOffer);
    const mockId = '1';
    mockAPI
      .onGet(`${APIRoute.Offers}/${mockId}/nearby`)
      .reply(200, mockOffers);

    const store = mockStore();

    await store.dispatch(fetchOffersNearbyAction(mockId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersNearbyAction.pending.type,
      fetchOffersNearbyAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Reviews when GET /comments', async () => {
    const mockReviews = Array.from({length: 3}, makeFakeReview);
    const mockId = '1';
    mockAPI
      .onGet(`${APIRoute.Comments}/${mockId}`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(mockId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Review when POST /comments', async () => {
    const fakeComment: CommentData = {id:'1', rating: 1, comment: 'password'};
    mockAPI
      .onPost(`${APIRoute.Comments}/${fakeComment.id}`)
      .reply(200, fakeComment);

    const store = mockStore();

    await store.dispatch(postReviewAction(fakeComment));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      postReviewAction.pending.type,
      postReviewAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Favorites when GET /favorite', async () => {
    const mockOffers = Array.from({length: 3}, makeFakeOffer);
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, mockOffers);

    const store = mockStore();

    await store.dispatch(fetchFavoriteAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavoriteAction.pending.type,
      fetchFavoriteAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Favorite when POST /favorite/id/status', async () => {
    const fakeFavoriteData: FavoriteData = {id:'1', status: false};
    const mockFavorite = makeFakeOffer();
    mockAPI
      .onPost(`${APIRoute.Favorite}/${fakeFavoriteData.id}/${fakeFavoriteData.status}`)
      .reply(200, mockFavorite);

    const store = mockStore();

    await store.dispatch(fetchSetFavoriteAction(fakeFavoriteData));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchSetFavoriteAction.pending.type,
      fetchSetFavoriteAction.rejected.type,
    ]);
  });
});


