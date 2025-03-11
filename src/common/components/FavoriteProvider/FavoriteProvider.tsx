import { FC, ReactNode, useState } from "react";
import { FavoriteContext } from "@common/context";

const FavoriteProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  function toggleFavorite(id: string) {
    setFavoriteIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((favId) => favId !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  return (
    <FavoriteContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
