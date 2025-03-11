import { HTMLAttributes } from "react";

export interface IconProps extends HTMLAttributes<HTMLImageElement> {
  readonly src: string;
  readonly size?: number;
  readonly alt?: string;
  readonly isFavorite?: boolean;
  readonly isHovered?: boolean;
  readonly filledWhiteIcon?: string;
}
