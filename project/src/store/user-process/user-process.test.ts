import {userProcess} from './user-process';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';

describe('Reducer: UserProcess', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      isLogin: false,
      email: '',};
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        isLogin: false,
        email: ''
      });
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus, isLogin and email if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: checkAuthAction.fulfilled.type, payload:{email:'test@test.ru'} }))
        .toEqual({
          authorizationStatus: AuthorizationStatus.Auth,
          isLogin: true,
          email: 'test@test.ru'
        });
    });
    it('should update authorizationStatus, isLogin and email if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, {type: checkAuthAction.rejected.type}))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          isLogin: false,
          email: ''
        });
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus, isLogin and email if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: loginAction.fulfilled.type, payload:{email:'test@test.ru'}}))
        .toEqual({
          authorizationStatus: AuthorizationStatus.Auth,
          isLogin: true,
          email: 'test@test.ru'
        });
    });
    it('should update authorizationStatus, isLogin and email if loginAction rejected', () => {
      expect(userProcess.reducer(state, {type: loginAction.rejected.type}))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          isLogin: false,
          email: ''
        });
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus, isLogin and email if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: logoutAction.fulfilled.type}))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NoAuth,
          isLogin: false,
          email: ''});
    });
  });
});
