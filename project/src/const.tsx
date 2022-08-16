export enum AppRoute {
    Login = '/login',
    Favorites = '/favorites',
    Room = '/offer/:id',
    Main = '/',
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export enum APIRoute {
    Offers = '/hotels',
    Offer = '/hotels/{hotelId}',
    Favorite = '/favorite',
    Login = '/login',
    Logout = '/logout',
  }

export const TIMEOUT_SHOW_ERROR = 2000;

export const RATING_ADAPTER = 0.05;

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT = '../../img/pin.svg';

export const URL_MARKER_CURRENT = '../../img/pin-active.svg';
