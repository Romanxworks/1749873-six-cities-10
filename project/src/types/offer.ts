import {Owner} from '../types/owner';

export type Offer = {
    id: number;
    images: string[];
    title: string;
    description: string;
    type: string;
    rooms: number;
    capacity: number;
    features: string[];
    owner: Owner;
    rating: number;
    favorite: boolean;
    premium: boolean;
    price: number;
    address:{
        lat:number;
        lng: number;
    };
    reviews: number[];
}
