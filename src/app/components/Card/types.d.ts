export interface CardProps {
  readonly name: string;
  readonly image: string;
  readonly id?: string;
  readonly isFavorite?: boolean;
  readonly description?: string;
  readonly classname?: string;
  readonly kiPower?: string;
  readonly titleSize?: string;
  readonly customTitleStyles?: string;
  readonly customImageStyles?: string;
  readonly descriptionClasses?: string;
  readonly customDescriptionStyles?: string;
  readonly showTopBorder?: boolean;
  readonly variant?: "list" | "full";
  readonly showIcon?: boolean;
  readonly onNavigate?: () => void;
  readonly roundedImg?: boolean;
}
