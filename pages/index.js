import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Search from "../icons/Search";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useRef } from "react";
import { search } from "../utils/utils";

export default function Home() {
  const router = useRouter();
  const inputRef = useRef();

  return (
    <div>
      <Head>
        <title>Google clone </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <form className="w-full flex flex-col items-center mt-36 ">
        <Image
          alt="logo"
          width={300}
          height={100}
          src="/google.jpeg"
          priority
        />
        <div
          className="
          flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg 
          focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl"
        >
          <Search />
          <input
            ref={inputRef}
            type="text"
            className="flex-grow focus:outline-none "
          />
          <MicrophoneIcon className="w-6 h-6 text-gray-500" />
        </div>
        <div className="flex flex-col sm:flex-row w-1/2 space-y-2 mt-8 sm:space-y-0 sm:space-x-4 sm:justify-center">
          <button
            className="btn"
            onClick={(e) => {
              search(e, router, inputRef);
            }}
          >
            Google Search
          </button>
          <button className="btn">I'm feeling lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
