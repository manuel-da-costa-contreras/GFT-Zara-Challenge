import { FC } from "react";

import Button from "@components/Button";
import Image from "@components/Image";
import Icon from "@components/Icon";
import styles from "./styles.module.less";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "@common/config";
import { useFavorites } from "@common/hooks/useFavorites";
import { AppDragonBallLogo, FavoriteFilledIcon } from "@assets/index";

const AppHeader: FC = () => {
  const { favoriteIds } = useFavorites();
  const navigate = useNavigate();

  function handleOnNavigateFavorite() {
    navigate("/home", { state: "favoriteState" });
  }

  return (
    <div className={styles.headerWrapper}>
      <Link to={AppRoutes.HOME_URL}>
        <Image height={50} maxWidth={130} src={AppDragonBallLogo} />
      </Link>

      <div className={styles.favoriteButton}>
        <Button
          onClick={handleOnNavigateFavorite}
          icon={<Icon src={FavoriteFilledIcon} />}
        />
        <span>{favoriteIds.length}</span>
      </div>
    </div>
  );
};
export default AppHeader;
