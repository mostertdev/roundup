import { useState, type FC } from "react";
import Link from "next/link";
import { type ICollection } from "~/types";

import UpdateCollectionModal from "~/components/Feature/UpdateCollectionModal";
import DeleteCollectionModal from "~/components/Feature/DeleteCollectionModal";
import { toast } from "react-toastify";

interface CollectionProps {
  collection: ICollection;
  refetch: () => void;
}

const Collection: FC<CollectionProps> = ({ collection, refetch }) => {
  const [showUpdateCollectionModal, setShowUpdateCollectionModal] =
    useState(false);
  const [showDeleteCollectionModal, setShowDeleteCollectionModal] =
    useState(false);

  const handleCopyToClipboard = () => {
    void navigator.clipboard
      .writeText(
        `
        <iframe
          width="1200"
          height="530"
          src="http://localhost:3000/addons/embed/${collection.id}"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            minHeight: "75vh",
          }}
        ></iframe>
        `,
      )
      .then(() => {
        toast.dismiss();
        toast.success("Embed Code Copied!", {
          position: "top-center",
        });
      });
  };

  return (
    <tr className="border-b bg-white">
      <th scope="row" className="px-6 py-4 font-medium ">
        <Link
          href={`/collections/${collection.id}`}
          className="hover:underline"
        >
          {collection.name}
        </Link>
      </th>
      <td className="px-6 py-4 text-sm text-slate-500">
        {collection.posts.length} posts | 0 mentions | 0 hashtags
      </td>

      <td className="py-4">
        <Link
          href={`http://localhost:3000/addons/live-feed/${collection.id}`}
          target="_blank"
          className="cursor-pointer text-slate-800 hover:underline"
        >
          Live Feed
        </Link>
      </td>
      <td className="py-4">
        <span
          className="cursor-pointer text-slate-800 hover:underline"
          onClick={handleCopyToClipboard}
        >
          Embed Code
        </span>
      </td>

      <td className="py-4 pl-8">
        <span
          className="cursor-pointer text-slate-800 hover:underline"
          onClick={() => setShowUpdateCollectionModal(true)}
        >
          Edit
        </span>
        <span> / </span>
        <span
          className="cursor-pointer text-slate-800 hover:underline"
          onClick={() => setShowDeleteCollectionModal(true)}
        >
          Delete
        </span>
      </td>

      {showUpdateCollectionModal && (
        <UpdateCollectionModal
          handleClose={() => setShowUpdateCollectionModal(false)}
          refetch={refetch}
          collection={collection}
        />
      )}

      {showDeleteCollectionModal && (
        <DeleteCollectionModal
          handleClose={() => setShowDeleteCollectionModal(false)}
          refetch={refetch}
          collection={collection}
        />
      )}
    </tr>
  );
};

export default Collection;
