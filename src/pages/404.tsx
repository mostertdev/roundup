import { type FC } from "react";
import Link from "next/link";

import PageMetaTags from "~/components/MetaData/PageMetaTags";

const Error404Page: FC = () => {
  return (
    <div>
      <PageMetaTags title="404 Page Not Found" />

      <div className="bg-slate-100">
        <div className="flex h-screen w-screen flex-col items-center justify-center space-y-12 p-4 md:space-y-20">
          <div className="space-y-5 text-center text-slate-800">
            <h1 className="text-3xl font-semibold uppercase md:text-6xl">
              PAGE NOT FOUND
            </h1>
            <p className="text-md mx-auto max-w-2xl text-center font-medium md:text-xl">
              It seems like the page you are looking for is no longer here, was
              never here, and probably will never be here.
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

export default Error404Page;
