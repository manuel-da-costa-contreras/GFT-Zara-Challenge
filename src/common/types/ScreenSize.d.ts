export enum ScreenSize {
  XXS = 0,
  XS = 1,
  SM = 2,
  MD = 3,
  LG = 4,
  XL = 5,
  XXL = 6,
}

export interface ScreenSizes {
  readonly h: ScreenSize;
  readonly v: ScreenSize;
}
