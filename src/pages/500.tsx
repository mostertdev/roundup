import { type FC } from "react";
import Link from "next/link";

import PageMetaTags from "~/components/MetaData/PageMetaTags";

const Error500Page: FC = () => {
  return (
    <div>
      <PageMetaTags title="500 Internal Server Error" />

      <div className="bg-slate-100">
        <div className="flex h-screen w-screen flex-col items-center justify-center space-y-12 p-4 md:space-y-20">
          <div className="space-y-5 text-center text-slate-800">
            <h1 className="text-3xl font-semibold uppercase md:text-6xl">
              INTERNAL SERVER ERROR
            </h1>
            <p className="text-md mx-auto max-w-2xl text-center font-medium md:text-xl">
              Don&apos;t worry, our development team has been notified and will
              fix this issue as soon as possible. Please try again later.
            </p>
          </div>

          <Link href="/">
            <button className="group w-[200px] rounded-full bg-white py-4 text-center shadow-xl hover:bg-slate-800 hover:shadow-none">
              <span className="text-base font-semibold text-slate-800 group-hover:text-white">
                Go Back
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error500Page;
