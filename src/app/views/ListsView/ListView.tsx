import PageLoading from "@components/PageLoading";
import { FC, useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getFilterHero, getHeroes } from "../../api/services";
import Card from "@components/Card";
import styles from "./styles.module.less";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "@components/Search";
import { AppRoutes } from "@common/config";
import { SingleCharacterApiResponse } from "@common/dtos";
import { useFavorites } from "@common/hooks/useFavorites";
import useScreenSizes from "@common/hooks/useScreenSizes";
import { ScreenSize } from "@common/types";
import { ErrorComponent } from "@common/components";
import Button from "@components/Button";

import Icon from "@components/Icon";
import {
  DoubleLeftArrowIcon,
  DoubleRightArrowIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from "@assets/index";

const ListView: FC = () => {
  const [pagination, setPagination] = useState<string | undefined>(undefined);
  const { state } = useLocation();
  const { favoriteIds } = useFavorites();
  const screenSizes = useScreenSizes();
  const [filteredData, setFilteredData] = useState<
    SingleCharacterApiResponse[] | undefined
  >([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const {
    data: heroes,
    error: heroesError,
    isFetching: isHeroesLoding,
    refetch,
  } = useQuery({
    queryKey: ["heroesList", pagination],
    queryFn: () =>
      getHeroes(searchValue.toLocaleLowerCase() || undefined, pagination),
    enabled:
      state !== "favoriteState" && (searchValue !== undefined || !pagination),
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
    retry: 1,
  });

  const { data: filteredCharacter } = useQuery({
    queryKey: [searchValue],
    queryFn: () => getFilterHero(searchValue.toLocaleLowerCase() || undefined),
    enabled: !!searchValue,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
    retry: 1,
  });

  function handleOnNavigate(id: number) {
    navigate(`${AppRoutes.CHARACTERS_URL}/${id}`);
  }

  function handleOnPageNavigation(url: string) {
    const match = url.match(/page=(\d+)/);
    if (match && match[1]) setPagination(match[1]);
    if (url.trim() && !match) {
      setPagination(undefined);
    }
  }

  function handleOnReturnIcon(key: string): string {
    if (key === "first") return DoubleLeftArrowIcon;
    if (key === "previous") return LeftArrowIcon;
    if (key === "next") return RightArrowIcon;
    if (key === "last") return DoubleRightArrowIcon;
    return "";
  }

  useEffect(() => {
    if (!state) {
      if (!searchValue) {
        if (heroes?.items && heroes.items.length) {
          setFilteredData(heroes.items as SingleCharacterApiResponse[]);
        }
      } else {
        if (filteredCharacter) {
          setFilteredData(
            filteredCharacter as unknown as SingleCharacterApiResponse[],
          );
        }
      }
    } else {
      const filteredFavoriteHeroes = heroes?.items.filter((hero) =>
        favoriteIds.includes(String(hero.id)),
      );

      if (searchValue) {
        const filteredSearchHero = filteredFavoriteHeroes?.filter(
          (favoriteHero) =>
            favoriteHero.name
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase()),
        );
        setFilteredData(filteredSearchHero as SingleCharacterApiResponse[]);
      } else {
        setFilteredData(filteredFavoriteHeroes as SingleCharacterApiResponse[]);
      }
    }
  }, [heroes, state, favoriteIds, searchValue, filteredCharacter]);

  if (heroesError)
    return <ErrorComponent error={heroesError} onRetry={refetch} />;

  if (isHeroesLoding) return <PageLoading />;

  return (
    <div className={styles.listWrapper}>
      {state && (
        <div
          className={`${styles.favoriteTitle} ${
            screenSizes.h < ScreenSize.SM
              ? styles.mobileSpacing
              : styles.desktopSpacing
          }`}
        >
          Favorites
        </div>
      )}
      <Search
        placeholder="Search a Character..."
        debounceInputValue={setSearchValue}
        searchResults={filteredData?.length}
      />
      <div className={styles.listContainer}>
        {filteredData &&
          filteredData.length > 0 &&
          filteredData.map((heroItem) => (
            <Card
              variant="list"
              key={heroItem.id}
              id={String(heroItem.id)}
              image={heroItem.image}
              name={heroItem.name}
              onNavigate={() => handleOnNavigate(heroItem.id)}
              showIcon
              showTopBorder
              classname={styles.listCardStyles}
            />
          ))}
      </div>
      {!state && (
        <div
          className={`${screenSizes.h < ScreenSize.MD ? styles.mobileActionButtons : styles.desktopActionButtons}`}
        >
          {heroes?.links &&
            Object.entries(heroes?.links).map(([key, value], index) => (
              <Button
                key={`${key}-${index}`}
                onClick={() => handleOnPageNavigation(value)}
                icon={<Icon src={handleOnReturnIcon(key)} />}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default ListView;
