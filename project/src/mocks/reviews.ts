import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    user:{
      id:1,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Willy Stocks',
      isPro: false,
    },
    rating: 4,
    date: 'April 2019',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    id: 2,
    user:{
      id:2,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Lilly Ericsson',
      isPro: true,
    },
    rating: 4.5,
    date: 'April 2019',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    id: 3,
    user:{
      id:3,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Hank Moody',
      isPro: true,
    },
    rating: 4.4,
    date: 'July 2019',
    comment: 'Common, a quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    id: 4,user:{
      id:4,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Billy Stocks',
      isPro: true,
    },
    rating: 2,
    date: 'May 2019',
    comment: 'Lorem ip A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  }
];
