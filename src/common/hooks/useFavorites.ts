import { FavoriteContext } from "@common/context";
import { useContext } from "react";

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites debe ser usado dentro de favoriteProvider");
  }
  return context;
};
