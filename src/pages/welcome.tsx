import { type FC } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const WelcomePage: FC = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="w-1/2 p-14 pl-24">
        <Image
          src="/assets/logo.png"
          alt="roundUP Logo"
          width={270}
          height={50}
          className="h-auto w-[270px]"
        />

        <div className="mt-24 pl-5">
          <h1 className="mb-10 text-4xl font-semibold text-slate-800">
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

      <div className="flex h-screen w-1/2 items-center justify-end py-10">
        <Image
          src="/assets/welcome.png"
          alt="Welcome Background"
          width={270}
          height={50}
          className="h-full w-auto"
        />
      </div>
    </div>
  );
};

export default WelcomePage;
