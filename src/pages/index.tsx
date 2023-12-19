import { type FC } from "react";
import Link from "next/link";

import PageMetaTags from "~/components/MetaData/PageMetaTags";
import Header from "~/components/Sections/Header";

import { MdOutlineSearch } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const LandingPage: FC = () => {
  return (
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
          />

          <button className="h-10 w-32 rounded-full bg-slate-800 font-semibold text-white hover:bg-slate-900 focus:outline-none">
            SEARCH
          </button>
        </div>

        <div className="mt-8 flex items-center justify-between space-x-14">
          <FaXTwitter className="h-36 w-36 text-white" />
          <FaFacebook className="h-36 w-36 text-white" />
          <FaInstagram className="h-36 w-36 text-white" />
        </div>
      </div>

      <div className="flex items-center justify-between px-12 pb-4">
        <div className="flex items-center justify-center space-x-5">
          <Link href="/" className="font-medium hover:underline">
            API Guide
          </Link>
          <Link href="/collections" className="font-medium hover:underline">
            GitHub Repository
          </Link>
        </div>

        <span>by Dominic Mostert</span>
      </div>
    </div>
  );
};

export default LandingPage;
