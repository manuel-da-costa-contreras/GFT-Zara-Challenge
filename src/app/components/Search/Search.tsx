import { ChangeEvent, FC, useEffect, useState } from "react";
import Icon from "@components/Icon";
import { useDebounce } from "@common/utils/useDebounce";
import { SearchProps } from "./types";
import styles from "./styles.module.less";
import { SearchOutlinedIcon } from "@assets/index";
import { ResultsTypes } from "@common/utils/reusableEnums";

const Search: FC<SearchProps> = ({
  placeholder,
  searchResults,
  debounceInputValue,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debounceSearch = useDebounce(searchValue, 1000);

  function handleOnSearch(e: ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();
    const { value } = e.target;

    setSearchValue(value);
  }

  const resultEnum =
    searchResults && searchResults > 1
      ? ResultsTypes.RESULTS
      : ResultsTypes.RESULT;

  useEffect(() => {
    if (debounceInputValue) debounceInputValue(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch]);

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.inputContainer}>
        <span className={styles.inputIcon}>
          <Icon src={SearchOutlinedIcon} alt="" size={12} />
        </span>
        <input
          placeholder={placeholder}
          className={styles.inputStyles}
          onChange={handleOnSearch}
        />
      </div>
      <div className={styles.resultStyles}>
        {searchResults ?? 0} {resultEnum}
      </div>
    </div>
  );
};

export default Search;
