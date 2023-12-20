import { type FC } from "react";
import Link from "next/link";

import Authentication from "~/components/Authentication/Autentication";
import PageMetaTags from "~/components/MetaData/PageMetaTags";
import Header from "~/components/Sections/Header";

const CollectionsManagerPage: FC = () => {
  return (
    <Authentication>
      <div className="flex flex-col">
        <PageMetaTags title="roundUP - Collections" />
        <Header />

        <div className="mb-6 mt-12 flex items-center justify-between px-32">
          <h2 className="text-xl font-medium text-slate-800">3 Collections</h2>
          <span className="flex cursor-pointer items-center justify-center space-x-1 font-light text-slate-800 hover:underline">
            <button className="rounded-full bg-slate-800 px-9 py-3 font-semibold text-white hover:bg-slate-900 focus:outline-none">
              + New Collections
            </button>
          </span>
        </div>

        {/* <div className="px-28 text-center text-lg font-medium">
        No collections found. Create a new one!
      </div> */}

        <div className="px-28">
          <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-left text-slate-800">
              <tbody>
                <tr className="border-b bg-white">
                  <th scope="row" className="px-6 py-4 font-medium ">
                    <Link
                      href="/collections/98y3498142345"
                      className="hover:underline"
                    >
                      Starbucks Wrong Names
                    </Link>
                  </th>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    67 posts | 1 mentions | 8 hashtags
                  </td>

                  <td className="py-4">
                    <span className="cursor-pointer text-slate-800 hover:underline">
                      Live Feed
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="cursor-pointer text-slate-800 hover:underline">
                      Embed
                    </span>
                  </td>
                  <td className="py-4 pl-8">
                    <span className="cursor-pointer text-slate-800 hover:underline">
                      Edit
                    </span>
                    <span> / </span>
                    <span className="cursor-pointer text-slate-800 hover:underline">
                      Delete
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Authentication>
  );
};

export default CollectionsManagerPage;
