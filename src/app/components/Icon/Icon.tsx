import { FC } from "react";
import { IconProps } from "./types";
import styles from "./styles.module.less";

const Icon: FC<IconProps> = ({
  src,
  size = 24,
  alt = "icon",
  className,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.icon} ${className ? className : ""} `}
      style={{ width: size, height: size }}
      {...props}
    />
  );
};

export default Icon;
