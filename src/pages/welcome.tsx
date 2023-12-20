import { type FC } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

const WelcomePage: FC = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    void router.push("/");
  }

  return (
    <div className="flex items-center justify-between">
      <div className="py-14 pl-14">
        <Image
          src="/assets/logo.png"
          alt="roundUP Logo"
          width={270}
          height={50}
          className="h-auto w-[270px]"
        />

        <div className="mt-24">
          <h1 className="mb-10 text-3xl font-semibold text-slate-800">
            Search & Collect
          </h1>
          <p className="mb-10 w-full max-w-md text-2xl text-slate-800">
            Only the best <span className="font-semibold">UGC</span> from your
            favourite social platforms
          </p>
          <p className="mb-14 w-full text-2xl text-slate-800">
            Reshare,
            <br />
            Create Live Feeds,
            <br />
            Embed on your Website!
          </p>

          <button
            onClick={() => signIn()}
            className="rounded-full bg-slate-800 px-9 py-3 font-semibold text-white hover:bg-slate-900 focus:outline-none"
          >
            GET STARTED!
          </button>
        </div>
      </div>

      <div className="flex h-screen items-center justify-center">
        <Image
          src="/assets/welcome.png"
          alt="Welcome Background"
          width={1200}
          height={750}
          className="h-full w-auto"
        />
      </div>
    </div>
  );
};

export default WelcomePage;
