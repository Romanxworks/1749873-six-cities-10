import {User} from './user';

export type Offer = {
    id: number;
    images: string[];
    title: string;
    description: string;
    type: string;
    bedrooms: number;
    maxAdults: number;
    features: string[];
    host: User;
    rating: number;
    isFavorite: boolean;
    isPremium: boolean;
    price: number;
    location: {
        latitude: number
        longitude: number
        zoom: number
    };
    reviews: number[];
    city: {
        location: {
        latitude: number
        longitude: number
        zoom: number
        }
        name: string
    };
    previewImage: string
}
