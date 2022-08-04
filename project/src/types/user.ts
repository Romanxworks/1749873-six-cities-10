export type User = {
  id: number;
  name: string;
  email?: string
  avatarUrl: string;
  isPro: boolean;
  token?: string;
  loginStatus?: boolean;
  favoritePoint?: number;
}
