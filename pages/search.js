import Head from "next/head";
import SearchHeader from "../components/SearchHeader";

export default function search({ results }) {
  console.log("results", results);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      <SearchHeader />
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}`
  ).then((response) => response.json());

  return {
    props: {
      results: data || {},
    },
  };
}
