import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getHero } from "../../api/services";
import PageLoading from "@components/PageLoading";
import styles from "./styles.module.less";
import Card from "@components/Card";
import { sortTransformations } from "@common/utils/transformData";
import useScreenSizes from "@common/hooks/useScreenSizes";
import { ScreenSize } from "@common/types";
import { ErrorComponent } from "@common/components";

const CharacterView: FC = () => {
  const screenSizes = useScreenSizes();
  const { idStr } = useParams();

  const {
    data: characterData,
    error: characterError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["character"],
    queryFn: () => getHero(String(idStr)),
    select: sortTransformations,
  });

  if (characterError)
    return <ErrorComponent error={characterError} onRetry={refetch} />;

  if (isLoading) return <PageLoading />;

  return (
    <div
      className={`${
        screenSizes.h < ScreenSize.SM
          ? styles.mobileBox
          : screenSizes.h > ScreenSize.MD
            ? styles.desktopBox
            : styles.tableBox
      }`}
    >
      <div className={styles.characterWrapper}>
        {characterData && (
          <Card
            id={String(characterData.id)}
            variant="full"
            image={characterData?.image}
            name={characterData?.name}
            description={characterData.description}
            showIcon
            customTitleStyles={styles.fullVariantTitle}
            customImageStyles={styles.fullVariantImageStyles}
            customDescriptionStyles={styles.fullVariantDescriptionStyles}
            classname={`${styles.fullCardBox}
            ${
              screenSizes.h < ScreenSize.SM
                ? styles.mobileStyles
                : screenSizes.h > ScreenSize.MD
                  ? styles.desktopStyles
                  : styles.tableStyles
            }`}
          />
        )}
      </div>
      {characterData && characterData.transformations.length > 0 && (
        <div className={`${styles.transformationWrapper}`}>
          <div className={styles.title}> Transformaciones </div>
          <div className={styles.list}>
            {characterData &&
              characterData.transformations.length &&
              characterData.transformations.map((transformation) => (
                <Card
                  key={`${transformation.id}-${transformation.ki}`}
                  variant="list"
                  image={transformation.image}
                  name={transformation.name}
                  kiPower={transformation.ki}
                  classname={styles.cardStyles}
                  descriptionClasses={styles.cardDescriptionStyles}
                  roundedImg={false}
                  customTitleStyles={styles.customListTransformations}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterView;
