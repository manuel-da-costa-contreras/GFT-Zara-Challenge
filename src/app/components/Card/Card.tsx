import { FC, useState } from "react";
import Image from "@components/Image";
import Button from "@components/Button";
import Icon from "@components/Icon";
import { CardProps } from "./types";
import styles from "./styles.module.less";
import { useFavorites } from "@common/hooks/useFavorites";
import {
  DefaultCard,
  FavoriteFilledIcon,
  FavoriteFilledWhiteIcon,
  FavoriteOutlinedIcon,
} from "@assets/index";

const Card: FC<CardProps> = ({
  name,
  image,
  id,
  onNavigate,
  description,
  classname,
  descriptionClasses,
  variant,
  showIcon,
  kiPower,
  showTopBorder,
  customTitleStyles,
  customImageStyles,
  customDescriptionStyles,
  roundedImg,
}) => {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(String(id));
  const [isHovered, setIsHovered] = useState(false);

  function handleOnClickFavorite(
    e: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) {
    e.stopPropagation();

    toggleFavorite(id);
  }

  return (
    <div
      className={`${styles.cardWrapper} 
    ${variant === "full" ? styles.full : styles.list} 
    ${classname}`}
      onClick={onNavigate}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        // alt={DefaultCard}
        altSrc={DefaultCard}
        altText="cardImage"
        src={image}
        rounded={roundedImg}
        shadow={false}
        className={`${styles.cardImage} ${customImageStyles}`}
      />

      <div
        className={`
      ${styles.cardInfo} 
      ${variant === "list" && showTopBorder ? styles.backgroundTransition : styles.cardBackgroundBlack}
      ${descriptionClasses ? descriptionClasses : ""}`}
      >
        <div className={`${styles.titleWrapper} ${customTitleStyles} `}>
          <span>{name}</span>
          {showIcon && (
            <Button
              onClick={(e) => handleOnClickFavorite(e, String(id))}
              className={styles.cardButton}
              icon={
                <Icon
                  src={isFavorite ? FavoriteFilledIcon : FavoriteOutlinedIcon}
                  isFavorite={isFavorite}
                  isHovered={isHovered}
                  filledWhiteIcon={FavoriteFilledWhiteIcon}
                  className={styles.transitionIcons}
                  size={18}
                />
              }
            />
          )}
        </div>
        {kiPower && <span className={styles.kiWrapper}>{kiPower}</span>}
        <div
          className={`${styles.descriptionWrapper} ${customDescriptionStyles}`}
        >
          <span>{description && <div>{description}</div>}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
