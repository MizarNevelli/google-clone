import Head from "next/head";
import SearchResults from "../components/SearchResults";
import SearchHeader from "../components/SearchHeader";
import { fakeResults } from "../utils/fakeResponse";
import { useRouter } from "next/router";

export default function search({ results }) {
  const router = useRouter();

  console.log("results", results);
  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>
      <SearchHeader />
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const mockData = true;
  const data = mockData
    ? fakeResults
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}`
      ).then((response) => response.json());

  return {
    props: {
      results: data || {},
    },
  };
}
