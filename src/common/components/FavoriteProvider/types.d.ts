export interface FavoriteProviderProps {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
}
