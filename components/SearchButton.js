import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function SearchButton() {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <form
      className="px-2 flex flex-wrap text-gray-500 bg-white rounded-lg focus-within:text-white focus-within:bg-gray-500"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="py-1 flex text-sm text-gray-500 bg-white focus:outline-none focus:bg-gray-500 focus:text-white focus:placeholder:text-white"
        placeholder="Search..."
        autoComplete="off"
      />
      <span className="flex items-center">
        <button
          onMouseDown={(event) => {
            event.preventDefault();
          }}
          type="submit"
        >
          <SearchIcon className="w-6 h-6" />
        </button>
      </span>
    </form>
  );
}
