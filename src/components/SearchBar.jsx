"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();

    const text = e.target.search.value;
    router.push(`?search=${text}`);

    // console.log(text, "form searchbar");
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-4 mt-4">
      <label className="input">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" name="search" required placeholder="Search" defaultValue={searchParams.get("search") || ""} />
      </label>
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
