import Button from "@components/Button";
import { FC } from "react";
import { ErrorComponentProps } from "./types";
import styles from "./styles.module.less";

export const ErrorComponent: FC<ErrorComponentProps> = ({ error, onRetry }) => {
  const errorMessage = (error as Error)?.message || "Error inesperado";

  return (
    <div className={styles.errorWrapper}>
      <h3 className={styles.errorTitle}> Ha sucedido un error! </h3>
      <p> {errorMessage} </p>
      {onRetry && (
        <Button className={styles.retryButton} onClick={onRetry}>
          Reintentar
        </Button>
      )}
    </div>
  );
};

export default ErrorComponent;
