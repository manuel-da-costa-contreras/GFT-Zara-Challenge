export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  readonly src: string;
  readonly alt?: string;
  readonly width?: number | string;
  readonly minWidth?: number | string;
  readonly maxWidth?: number | string;
  readonly minHeight?: number | string;
  readonly maxHeight?: number | string;
  readonly height?: number | string;
  readonly rounded?: boolean;
  readonly shadow?: boolean;
}
