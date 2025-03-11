import { Character, OriginPlanet, Transformation } from "./Character";

export interface MetaResponse {
  readonly totalItems: number;
  readonly itemCount: number;
  readonly itemsperPage: number;
  readonly totalPages: number;
  readonly currentPage: number;
}

export interface LinksNavigationResponse {
  readonly first: string;
  readonly previous: string;
  readonly next: string;
  readonly last: string;
}

export interface CharactersApiResponse {
  readonly items: Character[];
  readonly meta: MetaResponse;
  readonly links: LinksNavigationResponse;
}

export interface SingleCharacterApiResponse extends Character {
  readonly originPlanet: OriginPlanet[];
  readonly transformations: Transformation[];
}
