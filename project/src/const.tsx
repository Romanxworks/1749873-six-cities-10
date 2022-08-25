export enum AppRoute {
    Login = '/login',
    Favorites = '/favorites',
    Room = '/offer/:id',
    Main = '/',
    Error = '/*'
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export enum APIRoute {
    Offers = '/hotels',
    Favorite = '/favorite',
    Comments = '/comments',
    Login = '/login',
    Logout = '/logout',
  }

export const MAX_IMAGES_COUNT = 6;

export const MAX_REVIEWS_COUNT = 10;

export const MAX_REVIEW_LENGTH = 300;

export const MIN_REVIEW_LENGTH = 50;

export const TIMEOUT_SHOW_ERROR = 2000;

export const RATING_ADAPTER = 0.05;

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT = '../../img/pin.svg';

export const URL_MARKER_CURRENT = '../../img/pin-active.svg';


