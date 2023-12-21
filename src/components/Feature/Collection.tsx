import { useState, type FC } from "react";
import Link from "next/link";
import { type ICollection } from "~/types";

import UpdateCollectionModal from "~/components/Feature/UpdateCollectionModal";
import DeleteCollectionModal from "~/components/Feature/DeleteCollectionModal";

interface CollectionProps {
  collection: ICollection;
  refetch: () => void;
}

const Collection: FC<CollectionProps> = ({ collection, refetch }) => {
  const [showUpdateCollectionModal, setShowUpdateCollectionModal] =
    useState(false);
  const [showDeleteCollectionModal, setShowDeleteCollectionModal] =
    useState(false);

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
