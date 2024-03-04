import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = ({
  setSearch,
  setListShown,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setListShown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="search-list">
      <div className="max-w-lg w-full ">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IoSearch size={20} className="text-primary" />
          </div>
          <input
            type="search"
            id="default-search"
            className="px-[14.5px] py-[10px] border-2 border-neutral-300 focus:border-primary rounded-md w-full text-sm text-darkGray focus:outline-none ps-9"
            placeholder="Search"
            required
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setListShown(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
