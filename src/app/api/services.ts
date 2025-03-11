import {
  CharactersApiResponse,
  SingleCharacterApiResponse,
} from "@common/dtos";
import { get, AppRoutes } from "@common/config";

const LIMIT_PAGE = 50;

export async function getHeroes(name?: string, page?: string) {
  return (await get(`${AppRoutes.CHARACTERS_URL}`, {
    params: { name: name || undefined, page, limit: LIMIT_PAGE },
  })) as CharactersApiResponse;
}

export async function getFilterHero(name?: string) {
  return (await get(`${AppRoutes.CHARACTERS_URL}`, {
    params: { name: name || undefined },
  })) as SingleCharacterApiResponse;
}

export async function getHero(idStr: string) {
  return (await get(
    `${AppRoutes.CHARACTERS_URL}/${idStr}`,
    {},
  )) as SingleCharacterApiResponse;
}
