import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'],
    title: 'Beautiful & luxurious studio at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    rating: 4.5,
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    features: ['Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'],
    host: {
      id: 1,
      name: 'Billy Stocks',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    isFavorite: true,
    price: 120,
    location:{
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom:8
    },
    reviews: [1,3],
    isPremium: true,
    previewImage: 'img/room.jpg',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    }
  },
  {
    id: 2,
    images: [ 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg','img/room.jpg'],
    title: 'Beautiful & luxurious studio at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    rating: 4.2,
    type: 'Private room',
    bedrooms: 2,
    maxAdults: 5,
    features: ['Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'],
    host: {
      id: 2,
      name: 'Hank Moody',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    isFavorite: false,
    price: 100,
    location:{
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom:8
    },
    reviews: [2],
    isPremium: true,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: 3,
    images: ['img/apartment-03.jpg','img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/room.jpg',],
    title: 'Beautiful & luxurious studio at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    rating: 4.5,
    type: 'Private room',
    bedrooms: 1,
    maxAdults: 2,
    features: ['Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
    ],
    host: {
      id: 3,
      name: 'Lilly Ericsson',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    isFavorite: true,
    price: 80,
    location:{
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom:8
    },
    reviews: [3],
    isPremium: false,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 4,
    images: ['img/apartment-02.jpg', 'img/room.jpg', 'img/apartment-01.jpg', ],
    title: 'Luxurious studio at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    rating: 5,
    type: 'Apartment',
    bedrooms: 5,
    maxAdults: 10,
    features: ['Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'],
    host: {
      id: 4,
      name: 'Willy Stocks',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    isFavorite: false,
    price: 200,
    location:{
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom:8
    },
    reviews: [4],
    isPremium: false,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    previewImage: 'img/apartment-03.jpg',
  }
];
