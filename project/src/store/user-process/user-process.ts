import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';
import {UserProcess} from '../../types/state';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isLogin: false,
  email: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isLogin = true;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.email = '';
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isLogin = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isLogin = true;
      })
      .addCase(loginAction.rejected, (state) => {
        state.email = '';
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isLogin = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.email = '';
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isLogin = false;
      });
  }
});
