import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State): string => state[NameSpace.User].email;
export const getIsLogin = (state: State): boolean => state[NameSpace.User].isLogin;
