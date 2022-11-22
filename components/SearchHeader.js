import { MicrophoneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Search from "../icons/Search";
import { search } from "../utils/utils";
import User from "./User";

export default function SearchHeader() {
  const router = useRouter();
  const inputRef = useRef();

  return (
    <header className="sticky top-0 bg-white ">
      <div className="flex w-full p-6 items-center ">
        <Image
          className="cursor-pointer"
          width={120}
          height={40}
          alt="logo"
          src="/google.jpeg"
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        />
        <form
          className="flex border border-gray-200 rounded-full 
          shadow-lg px-2 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
        >
          <input
            className="w-full focus:outline-none"
            type="text"
            ref={inputRef}
            defaultValue={router.query.term}
          />
          <XMarkIcon
            onClick={() => {
              inputRef.current.value = "";
            }}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3 "
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <Search className="h-6 hidden sm:inline-flex  text-blue-500" />
          <button
            type="submit"
            hidden
            onClick={(e) => {
              search(e, router, inputRef);
            }}
          />
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
    </header>
  );
}
