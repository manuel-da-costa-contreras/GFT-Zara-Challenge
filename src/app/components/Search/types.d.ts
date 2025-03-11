export interface SearchProps {
  readonly placeholder?: string;
  readonly searchResults?: number;
  readonly debounceInputValue?: (value: string) => void;
}
