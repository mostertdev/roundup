import { useState, type FC, useEffect } from "react";
import Image from "next/image";

import PageMetaTags from "~/components/MetaData/PageMetaTags";
import Header from "~/components/Sections/Header";

import { FaFilter, FaInstagram, FaShare, FaXTwitter } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";
import type { IData, IPost } from "~/types";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Authentication from "~/components/Authentication/Autentication";
dayjs.extend(relativeTime);

const CollectionPage: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    void fetch("https://dummyapi.io/data/v1/tag/nature/post", {
      method: "GET",
      headers: {
        "app-id": "658068b4a8688e0bfbd32b48",
      },
    })
      .then((res) => res.json())
      .then((data: IData) => {
        setPosts(data.data);
        setPostCount(data.total);
      });
  }, []);

  return (
    <Authentication>
      <div className="flex flex-col">
        <PageMetaTags title="roundUP - # Collection" />
        <Header />

        <div className="mb-6 mt-12 flex items-center justify-between px-32">
          <span className="text-slate-800">
            <span className="font-medium">2024 Resolutions</span>
            <span> | </span>
            <span className="cursor-pointer hover:underline">Edit</span>
            <span> | </span>
            <span className="cursor-pointer hover:underline">Delete</span>
          </span>
        </div>

        {/* <div className="px-28 text-center text-lg font-medium">
        Oh no! This collection is empty, find some posts you like and add them.
      </div> */}

        <div className="columns-3 gap-8 space-y-8 px-28 pb-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            return (
              <div className="flex w-full break-inside-avoid-column flex-col items-stretch justify-between rounded-xl bg-white hover:shadow-[0px_0px_23px_1px_rgba(33,_31,_105,_0.13)]">
                <div>
                  {post.image && (
                    <Image
                      src={post.image}
                      alt="roundUP Logo"
                      width={270}
                      height={50}
                      className="h-auto max-h-[500px] w-full rounded-t-xl"
                    />
                  )}

                  <div className="flex items-center justify-between p-4">
                    <span>
                      @{post.owner.firstName}
                      {post.owner.lastName}
                    </span>
                    <FaInstagram className="h-5 w-5 text-slate-800" />
                  </div>

                  <p className="px-4 pb-3 text-sm text-slate-500">
                    {post.text}
                  </p>
                  <p className="px-4 pb-6 text-xs font-medium text-slate-400">
                    {post.tags.join(", ")}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2">
                  <span className="text-xs text-slate-500">
                    {dayjs(post?.publishDate).fromNow()}
                  </span>

                  <div className="flex items-center justify-between space-x-4">
                    <FaShare className="h-6 w-6 cursor-pointer text-slate-300 transition-all duration-300 ease-in-out hover:scale-125 hover:text-slate-800" />
                    <IoAddCircleSharp className="h-6 w-6 cursor-pointer text-slate-300 transition-all duration-300 ease-in-out hover:scale-125 hover:text-slate-800" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Authentication>
  );
};

export default CollectionPage;
