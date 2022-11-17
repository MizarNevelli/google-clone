import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <div>
      <Header />
      <div className="">
        {Object.values(providers).map((provider, i) => {
          return (
            <div key={i} className="flex flex-col w-full items-center mt-32">
              <img
                className="w-52 object-cover"
                alt="google-logo"
                src="/google.jpeg"
              />
              <p className="text-sm italic my-10 text-center">
                This website is created for learning purposes
              </p>
              <button
                className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-700"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
