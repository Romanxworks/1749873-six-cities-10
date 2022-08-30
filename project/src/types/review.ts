import {User} from './user';

export type Review = {
    id: number;
    rating: number;
    date: string;
    comment: string;
    user: User
};

export type FavoriteData = {
    id: string,
    status: boolean
  }
