import { useEffect, useState, type FC } from "react";
import deepEqual from "deep-equal";
import { ScreenSizesProviderProps } from "./types";
import { getScreenSizes } from "@common/utils/getScreenSizes";
import { ScreenSizesContext } from "@common/context";

const ScreenSizesProvider: FC<ScreenSizesProviderProps> = ({ children }) => {
  const [screenSizes, setScreenSizes] = useState(getScreenSizes);

  useEffect((): (() => void) => {
    function updateScreenSizes(): void {
      const newScreenSizes = getScreenSizes();

      if (!deepEqual(screenSizes, newScreenSizes)) {
        setScreenSizes(newScreenSizes);
      }
    }

    window.addEventListener("resize", updateScreenSizes);

    return (): void => {
      window.removeEventListener("resize", updateScreenSizes);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenSizesContext.Provider value={screenSizes}>
      {children}
    </ScreenSizesContext.Provider>
  );
};

export default ScreenSizesProvider;
