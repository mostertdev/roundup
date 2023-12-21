import { type FC, useState } from "react";
import Image from "next/image";

import { type IPost } from "~/types";

import { FaInstagram, FaShare, FaTrash, FaXTwitter } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PostShareModal from "./PostShareModal";
import PostSaverModal from "./PostSaverModal";
import DeletePostModal from "./DeletePostModal";
dayjs.extend(relativeTime);

interface PostProps {
  post: IPost;
  inCollection?: boolean;
}

const Post: FC<PostProps> = ({ post, inCollection }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSaverModal, setShowSaverModal] = useState(false);
  const [showDeletePostModal, setShowDeletePostModal] = useState(false);

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

        <div className="flex items-center justify-between space-x-4">
          <FaShare
            onClick={() => setShowShareModal(true)}
            className="h-6 w-6 cursor-pointer text-slate-300 transition-all duration-300 ease-in-out hover:scale-125 hover:text-slate-800"
          />

          {!inCollection && (
            <IoAddCircleSharp
              onClick={() => setShowSaverModal(true)}
              className="h-6 w-6 cursor-pointer text-slate-300 transition-all duration-300 ease-in-out hover:scale-125 hover:text-slate-800"
            />
          )}

          {inCollection && (
            <FaTrash
              onClick={() => setShowDeletePostModal(true)}
              className="h-6 w-6 cursor-pointer text-slate-300 transition-all duration-300 ease-in-out hover:scale-125 hover:text-slate-800"
            />
          )}
        </div>
      </div>

      {showShareModal && (
        <PostShareModal
          handleClose={() => setShowShareModal(false)}
          post={post}
        />
      )}

      {showSaverModal && (
        <PostSaverModal
          handleClose={() => setShowSaverModal(false)}
          post={post}
        />
      )}

      {showDeletePostModal && (
        <DeletePostModal
          handleClose={() => setShowDeletePostModal(false)}
          post={post}
        />
      )}
    </div>
  );
};

export default Post;
