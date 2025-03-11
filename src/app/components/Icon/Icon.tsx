import { FC } from "react";
import { IconProps } from "./types";
import styles from "./styles.module.less";

const Icon: FC<IconProps> = ({
  src,
  size = 24,
  alt = "icon",
  className,
  isFavorite,
  isHovered,
  filledWhiteIcon,
  ...props
}) => {
  return (
    <>
      {filledWhiteIcon && (
        <img
          src={filledWhiteIcon}
          className={`${styles.filledFavoriteIcon} ${isFavorite && isHovered ? styles.show : styles.hide}`}
          style={{ width: size, height: size }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${isFavorite && isHovered ? styles.hide : styles.show}  ${styles.icon} ${className ? className : ""} `}
        style={{ width: size, height: size }}
        {...props}
      />
    </>
  );
};

export default Icon;
