import { FC } from "react";
import { ButtonProps } from "./types";
import PageLoading from "@components/PageLoading";
import styles from "./styles.module.less";

const Button: FC<ButtonProps> = ({
  icon,
  loading = false,
  children,
  ...props
}) => {
  return (
    <button
      className={`${icon && !children ? styles.icon : ""} ${loading ? styles.loading : ""}`}
      {...props}
    >
      {loading ? <PageLoading size="sm" /> : icon}
      {children && <span className="button-text"> {children} </span>}
    </button>
  );
};

export default Button;
