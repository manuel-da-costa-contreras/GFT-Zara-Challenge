import { createContext } from "react";
import type { ScreenSizesContextValue } from "./ScreenSizesContext.d";
import { getScreenSizes } from "@common/utils/getScreenSizes";

export default createContext<ScreenSizesContextValue>(getScreenSizes());
