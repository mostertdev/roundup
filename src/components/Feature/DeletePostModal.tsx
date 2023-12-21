import { type FC } from "react";

import Modal from "../Base/Modal";
import { type IPost } from "~/types";
import { api } from "~/_utils/api";
import { toast } from "react-toastify";

interface DeletePostModalProps {
  handleClose: () => void;
  post: IPost;
}

const DeletePostModal: FC<DeletePostModalProps> = ({ handleClose, post }) => {
  const { mutate: deletePost, isLoading } = api.posts.delete.useMutation({
    onSuccess: () => {
      toast.dismiss();
      toast.success("Post Removed", {
        position: "top-center",
      });
      handleClose();
    },
  });

  const handleDelete = () => {
    deletePost({ id: post?.id ?? "" });
  };

  return (
    <Modal handleClose={handleClose} title="Remove a Post">
      <div className="mb-8 text-center">
        <p>
          Are you sure you want to remove this post by {post.publisher} from
          your collection?
        </p>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={handleDelete}
          className="rounded-full bg-red-500 px-9 py-3 font-semibold text-white hover:bg-red-700 focus:outline-none"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Remove Post"}
        </button>
        <button
          onClick={handleClose}
          className="rounded-full bg-slate-800 px-9 py-3 font-semibold text-white hover:bg-slate-900 focus:outline-none"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeletePostModal;
