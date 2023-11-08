import { useEffect, useRef } from "react";
import { SearchIcon } from "~/icons/SearchIcon";

export const SearchInput = () => {
  const searchRef = useRef();
  useEffect(() => {
    searchRef.current.focus();
  });
  return (
    <form
      action=""
      className="flex items-center gap-2 bg-[#262626] w-[364px] h-[40px] rounded-lg py-[3px] px-4"
    >
      <input ref={searchRef} className="w-full h-full" placeholder="Search" />
    </form>
  );
};
