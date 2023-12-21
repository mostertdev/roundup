import { type FC, useEffect, useState } from "react";
import { type IPost } from "~/types";

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

interface PostShareModalProps {
  handleClose: () => void;
  post: IPost;
}

const PostShareModal: FC<PostShareModalProps> = ({ handleClose, post }) => {
  const [shareURL, setShareURL] = useState("");

  useEffect(() => {
    // create post and generate share url
    setShareURL(window.location.href);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-40 h-screen w-screen bg-slate-800 bg-opacity-70">
      <div className="flex h-full w-full items-center justify-center text-center">
        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <h4 className="text-xl font-medium text-slate-800">Share a Post</h4>

            <div className="mt-5 flex items-center justify-between">
              <div className=" flex items-center justify-start space-x-3">
                <FacebookShareButton url={shareURL}>
                  <FacebookIcon size={40} round />
                </FacebookShareButton>

                <TwitterShareButton url={shareURL}>
                  <TwitterIcon size={40} round />
                </TwitterShareButton>

                <WhatsappShareButton url={shareURL}>
                  <WhatsappIcon size={40} round />
                </WhatsappShareButton>

                <RedditShareButton url={shareURL}>
                  <RedditIcon size={40} round />
                </RedditShareButton>

                <TelegramShareButton url={shareURL}>
                  <TelegramIcon size={40} round />
                </TelegramShareButton>

                <LinkedinShareButton url={shareURL}>
                  <LinkedinIcon size={40} round />
                </LinkedinShareButton>
              </div>

              <button
                className="rounded-full bg-slate-800 px-9 py-3 font-semibold text-white hover:bg-slate-900 focus:outline-none"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShareModal;
