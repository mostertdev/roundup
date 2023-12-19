import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: FC = () => {
  return (
    <div className="flex w-full items-center justify-between px-20 py-8">
      <Image
        src="/assets/logo.png"
        alt="roundUP Logo"
        width={270}
        height={50}
        className="h-auto w-[270px]"
      />

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
