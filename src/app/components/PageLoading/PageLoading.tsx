import { FC } from "react";
import styles from "./styles.module.less";
import { PageLoadingProps } from "./types";

const PageLoading: FC<PageLoadingProps> = ({ size = "md" }) => {
  return (
    <div className={`${styles.spinnerContainer} ${styles.spinner}-${size}`}>
      <div className={styles.spinner}>
        <div className={styles.spinnerCircle}></div>
      </div>
    </div>
  );
};

export default PageLoading;
