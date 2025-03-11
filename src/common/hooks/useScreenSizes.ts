import { ScreenSizesContext } from "@common/context";
import { ScreenSizes } from "@common/types";
import { useContext } from "react";

export default function useScreenSizes(): ScreenSizes {
  return useContext(ScreenSizesContext);
}
