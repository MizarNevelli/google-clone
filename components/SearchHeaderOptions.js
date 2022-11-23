import { PhotoIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Search from "../icons/Search";
import SearchHeaderOption from "./SearchHeaderOption";

export default function SearchHeaderOptions() {
  const router = useRouter();

  return (
    <div
      className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 
                    lg:justify-start border-b"
    >
      <SearchHeaderOption
        title="All"
        Icon={Search}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotoIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
