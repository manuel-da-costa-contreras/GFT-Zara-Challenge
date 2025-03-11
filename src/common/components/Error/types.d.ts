export interface ErrorComponentProps {
  readonly error: unknown;
  readonly onRetry?: () => void;
}
