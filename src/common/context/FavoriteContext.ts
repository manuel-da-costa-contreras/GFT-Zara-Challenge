import { createContext } from "react";
import type { FavoriteContextValue } from "./FavoriteContext.d";

export default createContext<FavoriteContextValue | undefined>(undefined);
