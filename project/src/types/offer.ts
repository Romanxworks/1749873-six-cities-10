import {User} from './user';
import {City} from './map';
export type Offer = {
    id: number;
    images: string[];
    title: string;
    description: string;
    type: string;
    bedrooms: number;
    maxAdults: number;
    goods: string[];
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
    city: City;
    previewImage: string
}
