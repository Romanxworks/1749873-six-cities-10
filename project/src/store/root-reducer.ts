import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {mainProcess} from './main-process/main-process';
import {offersData} from './offers-data/offers-data';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.Main]: mainProcess.reducer,
});
