import { FC, InputHTMLAttributes, useCallback } from "react";
import { debounce } from "lodash";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onSearch: (searchValue: string) => void;
}

export const SearchInput: FC<Props> = ({ onSearch, defaultValue }, props) => {
  /**
   * @param value -> is passed and triggers search after 250ms after last function trigger to reduce request count
   */
  const handleSearch = useCallback(debounce(onSearch, 250), []);

  return (
    <div className="col w-full sm:w-[unset]">
      <label htmlFor="search">Search</label>
      <input
        {...props}
        type="text"
        className="input"
        placeholder={"🔍 Search"}
        name={"search"}
        onChange={({ target: { value } }) => {
          handleSearch(value);
        }}
        defaultValue={defaultValue}
      />
    </div>
  );
};
