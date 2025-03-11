import { ScreenSize, ScreenSizes } from "@common/types";

export function getHorizontalScreenSize(): ScreenSize {
  const width = window.innerWidth;
  if (width <= 480) return ScreenSize.XXS;
  if (width < 576) return ScreenSize.XS;
  if (width < 768) return ScreenSize.SM;
  if (width < 992) return ScreenSize.MD;
  if (width < 1200) return ScreenSize.LG;
  if (width < 1600) return ScreenSize.XL;
  return ScreenSize.XXL;
}

export function getVerticalScreenSize(): ScreenSize {
  const height = window.innerHeight;
  if (height < 640) return ScreenSize.XS;
  if (height < 768) return ScreenSize.SM;
  if (height < 1024) return ScreenSize.MD;
  if (height < 1200) return ScreenSize.LG;
  if (height < 1600) return ScreenSize.XL;
  return ScreenSize.XXL;
}

export function getScreenSizes(): ScreenSizes {
  return {
    h: getHorizontalScreenSize(),
    v: getVerticalScreenSize(),
  };
}
