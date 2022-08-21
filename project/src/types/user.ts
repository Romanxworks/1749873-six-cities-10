export type User = {
  id: number;
  name: string;
  email: string
  avatarUrl: string;
  isPro: boolean;
  token: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export type CommentData = {
  id: string;
  rating: number;
  comment: string;
};

