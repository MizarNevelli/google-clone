import { signIn, signOut, useSession } from "next-auth/react";

export default function User(className) {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      {session ? (
        <>
          <img
            referrerPolicy="no-referrer"
            className={`rounded-full hover:bg-gray-200 h-12 cursor-pointer p-1 ${className}`}
            onClick={signOut}
            alt="user-image"
            src={session?.user?.image}
          ></img>
        </>
      ) : (
        <button
          className={`bg-blue-500 text-white px-6 py-2 rounded font-medium hover:brightness-125 hover:shadow-md ${className}`}
          onClick={signIn}
        >
          Sign in
        </button>
      )}
    </>
  );
}
