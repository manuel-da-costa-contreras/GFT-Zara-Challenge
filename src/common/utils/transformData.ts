import { SingleCharacterApiResponse } from "@common/dtos";

export type KiSuffix =
  | "Billion"
  | "Trillion"
  | "Quadrillion"
  | "Quintillion"
  | "Sextillion"
  | "Septillion";

export const suffixMap: Record<KiSuffix, number> = {
  Billion: 1e9,
  Trillion: 1e12,
  Quadrillion: 1e15,
  Quintillion: 1e18,
  Sextillion: 1e21,
  Septillion: 1e24,
};

export function parseKi(ki: string) {
  const parts = ki.split(" ");
  if (parts.length === 1) {
    return parseFloat(parts[0]);
  }
  const [value, suffix] = parts;
  return parseFloat(value) * (suffixMap[suffix as KiSuffix] || 1);
}

export function sortTransformations(data: SingleCharacterApiResponse) {
  const transform = data.transformations.slice().sort((a, b) => {
    return parseKi(a.ki) - parseKi(b.ki);
  });

  return { ...data, transformations: transform } as SingleCharacterApiResponse;
}
