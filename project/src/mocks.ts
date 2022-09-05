import {system, name, internet, address, lorem} from 'faker';
import {Offer} from './types/offer';
import {getRandomInteger} from './utils';
import {City} from './types/map';
import {Review} from './types/review';

export const makeFakeCity = (): City => ({
  name: address.cityName(),
  location:{
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 13
  }
});

export const makeFakeReview = (): Review => ({
  id: getRandomInteger(0,5),
  rating: getRandomInteger(1,5),
  date: '2020-01-01T00:00:00.000Z',
  comment: lorem.sentence(5),
  user: {
    id: getRandomInteger(0,5),
    name: name.firstName(),
    email: internet.email(),
    avatarUrl: internet.avatar(),
    isPro: false,
    token: 'string',
  }
});

export const makeFakeOffer = (): Offer => ({
  id: getRandomInteger(0,5),
  images: Array.from({length: getRandomInteger(0,5)}, system.filePath),
  title: lorem.text(),
  description: lorem.text(),
  type: lorem.word(),
  bedrooms: getRandomInteger(0,5),
  maxAdults: getRandomInteger(0,5),
  goods: Array.from({length: getRandomInteger(1,5)}, lorem.word),
  host:{
    id: getRandomInteger(0,5),
    name: name.firstName(),
    email: internet.email(),
    avatarUrl: internet.avatar(),
    isPro: false,
    token: 'string',
  },
  rating: getRandomInteger(0,5),
  isFavorite: false,
  isPremium: false,
  price: getRandomInteger(0,100),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 10
  },
  reviews: [1],
  city: makeFakeCity(),
  previewImage: system.filePath()
});
