import { type FC } from "react";
import Image from "next/image";

import { type IPost } from "~/types";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className="flex w-full max-w-sm break-inside-avoid-column flex-col items-stretch justify-between rounded-xl bg-white hover:shadow-[0px_0px_23px_1px_rgba(33,_31,_105,_0.13)]">
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
          <span>{post.publisher}</span>

          {post.platform === "instagram" && (
            <FaInstagram className="h-5 w-5 text-slate-800" />
          )}

          {post.platform === "twitter" && (
            <FaXTwitter className="h-5 w-5 text-slate-800" />
          )}
        </div>

        <p className="px-4 pb-3 text-sm text-slate-500">{post.text}</p>
        <p className="px-4 pb-6 text-xs font-medium text-slate-400">
          {post.tags}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2">
        <span className="text-xs text-slate-500">
          {dayjs(post?.published).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default Post;
