export interface Character {
  readonly id: number;
  readonly name: string;
  readonly ki: string;
  readonly maxKi: string;
  readonly race: string;
  readonly gender: string;
  readonly description: string;
  readonly image: string;
  readonly affiliation: string;
}

export interface Transformation {
  readonly id: number;
  readonly name: string;
  readonly image: string;
  readonly ki: string;
  readonly deletedAt?: null;
}

export interface OriginPlanet {
  readonly id: number;
  readonly name: string;
  readonly isDestroyed: boolean;
  readonly description: string;
  readonly image: string;
  readonly deletedAt?: null;
}
