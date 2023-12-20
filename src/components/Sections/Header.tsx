import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineSearch } from "react-icons/md";

interface HeaderProps {
  withSearch?: boolean;
}

const Header: FC<HeaderProps> = ({ withSearch }) => {
  return (
    <div className="flex w-full items-center justify-between px-20 py-8">
      <Image
        src="/assets/logo.png"
        alt="roundUP Logo"
        width={270}
        height={50}
        className="h-auto w-[270px]"
      />

      {withSearch && (
        <div className="group flex items-center justify-center rounded-full bg-white px-5 py-1">
          <MdOutlineSearch className="h-8 w-8 text-slate-200 transition-all duration-200 ease-in-out group-focus-within:text-slate-800" />

          <input
            type="text"
            className="h-10 w-96 rounded-full py-1 pl-2 text-slate-800 focus:outline-none"
            placeholder="Search for Hashtags or Mentions"
          />

          <button className="text-2xl font-semibold text-slate-200 hover:text-slate-800">
            X
          </button>
        </div>
      )}

      <div className="flex items-center justify-center space-x-12">
        <div className="flex items-center justify-center space-x-5">
          <Link href="/" className="font-medium hover:underline">
            Search
          </Link>
          <Link href="/collections" className="font-medium hover:underline">
            Collections
          </Link>
        </div>

        <Image
          src="/assets/preview.png"
          width={50}
          height={50}
          alt="Profile"
          className="h-12 w-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
