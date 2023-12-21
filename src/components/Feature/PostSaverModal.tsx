import { type FC } from "react";

import Modal from "../Base/Modal";
import { api } from "~/_utils/api";
import { type IPost } from "~/types";
import { toast } from "react-toastify";

interface PostSaverModalProps {
  handleClose: () => void;
  post: IPost;
}

const PostSaverModal: FC<PostSaverModalProps> = ({ handleClose, post }) => {
  const { data: collections, isLoading } = api.collections.fetchAll.useQuery();

  const { mutate: savePost } = api.posts.create.useMutation({
    onSuccess: () => {
      toast.dismiss();
      toast.success("Post Saved!", {
        position: "top-center",
      });
    },
  });

  const handleSave = (collectionId: string) => {
    savePost({ collectionId, ...post });
    handleClose();
  };

  return (
    <Modal handleClose={handleClose} title="Save a Post to...">
      <div className="flex items-center justify-between space-x-4">
        <div className="w-full space-y-2">
          {isLoading && <div>Loading Collections...</div>}

          {collections?.map((collection) => {
            return (
              <div
                onClick={() => handleSave(collection.id)}
                className="w-full cursor-pointer rounded-md bg-slate-50 py-4 hover:bg-slate-200"
              >
                <span className="px-5 py-4 font-medium">{collection.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default PostSaverModal;
