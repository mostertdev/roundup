import { useState, type FC } from "react";
import Link from "next/link";

import Authentication from "~/components/Authentication/Autentication";
import PageMetaTags from "~/components/MetaData/PageMetaTags";
import Header from "~/components/Sections/Header";

import { MdOutlineSearch } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/router";

const LandingPage: FC = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");

  return (
    <Authentication>
      <div className="flex h-screen w-screen flex-col items-stretch justify-stretch">
        <PageMetaTags title="roundUP - Search for Posts" />
        <Header />

        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex items-center justify-center rounded-full bg-white py-1 pl-4 pr-1">
            <MdOutlineSearch className="h-8 w-8 text-slate-800" />

            <input
              type="text"
              className="h-10 w-96 rounded-full py-1 pl-2 text-slate-800 focus:outline-none"
              placeholder="Search for Hashtags or Mentions"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDownCapture={(e) => {
                if (e.key === "Enter") {
                  void router.push(
                    `/search/${search.replace("#", "").replace("@", "")}`,
                  );
                }
              }}
            />

            <button
              className="h-10 w-32 rounded-full bg-slate-800 font-semibold text-white hover:bg-slate-900 focus:outline-none"
              onClick={() => {
                if (search.length > 0) {
                  void router.push(
                    `/search/${search.replace("#", "").replace("@", "")}`,
                  );
                }
              }}
            >
              SEARCH
            </button>
          </div>

          <div className="mt-8 flex items-center justify-between space-x-14">
            <FaXTwitter className="h-36 w-36 text-white" />
            <FaFacebook className="h-36 w-36 text-white" />
            <FaInstagram className="h-36 w-36 text-white" />
          </div>
        </div>

        <div className="flex items-center justify-center space-x-1 px-12 pb-4">
          <div className="flex items-center justify-center space-x-5">
            <Link
              href="https://github.com/mostertdev/roundup"
              target="_blank"
              className="font-medium hover:underline"
            >
              GitHub Repository
            </Link>
          </div>

          <span> - a project by Dominic Mostert</span>
        </div>
      </div>
    </Authentication>
  );
};

export default LandingPage;
