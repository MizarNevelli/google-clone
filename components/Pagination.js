import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Pagination() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  console.log("router.quert", router.query);

  return (
    <div>
      <Link
        href={`/search?term=${router.query.term}&searchType=${
          router.query.searchType || ""
        }&start=${startIndex + 1}`}
      >
        <div>
          <ChevronRightIcon className="h-6" />
          <p>Next</p>
        </div>
      </Link>
      {/* <ChevronLeftIcon className="h-6" /> */}
    </div>
  );
}
