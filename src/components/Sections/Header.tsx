import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineSearch } from "react-icons/md";
import { useSession } from "next-auth/react";

interface HeaderProps {
  withSearch?: boolean;
  search?: string;
  setSearch?: (search: string) => void;
}

const Header: FC<HeaderProps> = ({ withSearch, search, setSearch }) => {
  const { data } = useSession();

  return (
    <div className="flex w-full items-center justify-between px-8 py-8 xl:px-20">
      <Image
        src="/assets/logo.png"
        alt="roundUP Logo"
        width={270}
        height={50}
        className="hidden h-auto w-[270px] xl:inline"
      />
      <Image
        src="/assets/icon.png"
        alt="roundUP Logo"
        width={50}
        height={50}
        className="h-[50px] w-[50px] xl:hidden"
      />

      {withSearch && (
        <div className="group hidden items-center justify-center rounded-full bg-white px-5 py-1 xl:flex">
          <MdOutlineSearch className="h-8 w-8 text-slate-200 transition-all duration-200 ease-in-out group-focus-within:text-slate-800" />

          <input
            type="text"
            className="h-10 w-96 rounded-full py-1 pl-2 text-slate-800 focus:outline-none"
            placeholder="Search for Hashtags or Mentions"
            value={search}
            onChange={(e) => setSearch && setSearch(e.target.value)}
          />

          <button
            className="text-2xl font-semibold text-slate-200 hover:text-slate-800"
            onClick={() => {
              setSearch && setSearch("");
            }}
          >
            X
          </button>
        </div>
      )}

      <div className="flex items-center justify-center space-x-4 xl:space-x-12">
        <div className="flex items-center justify-center space-x-5">
          <Link
            href="/"
            className="text-sm font-medium hover:underline xl:text-lg"
          >
            Search
          </Link>
          <Link
            href="/collections"
            className="text-sm font-medium hover:underline xl:text-lg"
          >
            Collections
          </Link>
        </div>

        <Image
          src={data?.user?.image ?? "/assets/icon.png"}
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
