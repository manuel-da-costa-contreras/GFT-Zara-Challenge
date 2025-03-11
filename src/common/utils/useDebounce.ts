import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, defaultDelay = 500): T {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebounceValue(value);
    }, defaultDelay);

    return () => clearTimeout(debounceHandler);
  }, [defaultDelay, value]);

  return debounceValue;
}
