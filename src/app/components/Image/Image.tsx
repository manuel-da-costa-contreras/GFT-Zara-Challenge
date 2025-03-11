import { FC } from "react";
import { ImageProps } from "./types";
import styles from "./styles.module.less";

const Image: FC<ImageProps> = ({
  src,
  altSrc,
  altText,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  rounded,
  shadow,
  className = "",
  loading = "lazy",
  ...props
}) => {
  const classes = [
    styles.imgCover,
    rounded ? styles.imgRounded : "",
    shadow ? styles.imgShadow : "",
    className,
  ].join(" ");

  return (
    <div
      className={styles.overflowHidden}
      style={{
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
      }}
    >
      <img
        src={src ?? altSrc}
        alt={altText}
        loading={loading}
        className={classes}
        {...props}
      />
    </div>
  );
};

export default Image;
