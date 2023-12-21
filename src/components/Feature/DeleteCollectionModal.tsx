import { type FC } from "react";

import Modal from "../Base/Modal";
import { type ICollection } from "~/types";
import { api } from "~/_utils/api";
import { useRouter } from "next/router";

interface DeleteCollectionModalProps {
  handleClose: () => void;
  refetch?: () => void;
  collection?: ICollection;
}

const DeleteCollectionModal: FC<DeleteCollectionModalProps> = ({
  handleClose,
  refetch,
  collection,
}) => {
  const router = useRouter();

  const { mutate: deleteCollection, isLoading } =
    api.collections.delete.useMutation({
      onSuccess: () => {
        if (refetch) {
          refetch();
        } else {
          void router.push("/collections");
        }
        handleClose();
      },
    });

  const handleDelete = () => {
    deleteCollection({ id: collection?.id ?? "" });
  };

  return (
    <Modal handleClose={handleClose} title="Delete a Collection">
      <div className="mb-8 text-center">
        <p>Are you sure you want to delete this collection?</p>
        <strong>{collection?.name}</strong>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={handleDelete}
          className="rounded-full bg-red-500 px-9 py-3 font-semibold text-white hover:bg-red-700 focus:outline-none"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Delete Collection"}
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

export default DeleteCollectionModal;
