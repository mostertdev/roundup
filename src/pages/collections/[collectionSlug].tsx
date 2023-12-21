import { useState, type FC } from "react";

import PageMetaTags from "~/components/MetaData/PageMetaTags";
import Header from "~/components/Sections/Header";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Authentication from "~/components/Authentication/Autentication";
import { useRouter } from "next/router";
import { api } from "~/_utils/api";
import Post from "~/components/Feature/Post";
import UpdateCollectionModal from "~/components/Feature/UpdateCollectionModal";
import DeleteCollectionModal from "~/components/Feature/DeleteCollectionModal";
import PostLoader from "~/components/Feature/PostLoader";
dayjs.extend(relativeTime);

const CollectionPage: FC = () => {
  const router = useRouter();
  const { collectionSlug } = router.query;

  const {
    data: collection,
    isLoading,
    refetch,
  } = api.collections.fetchOne.useQuery({
    id: collectionSlug as string,
  });

  const [showUpdateCollectionModal, setShowUpdateCollectionModal] =
    useState(false);
  const [showDeleteCollectionModal, setShowDeleteCollectionModal] =
    useState(false);

  return (
    <Authentication>
      <div className="flex flex-col">
        <PageMetaTags title={`roundUP - ${collection?.name} Posts`} />
        <Header />

        <div className="mb-6 mt-12 flex items-center justify-between px-32">
          <span className="text-slate-800">
            <span className="font-medium">{collection?.name}</span>
            <span> | </span>
            <span
              onClick={() => setShowUpdateCollectionModal(true)}
              className="cursor-pointer hover:underline"
            >
              Edit
            </span>
            <span> | </span>
            <span
              onClick={() => setShowDeleteCollectionModal(true)}
              className="cursor-pointer hover:underline"
            >
              Delete
            </span>
          </span>
        </div>

        {!isLoading && collection?.posts.length === 0 && (
          <div className="mt-24 px-28 text-center text-lg font-medium">
            Oh no! This collection is empty, find some posts you like and add
            them.
          </div>
        )}

        {isLoading && <PostLoader />}

        <div className="columns-3 gap-8 space-y-8 px-28 pb-10 md:grid-cols-2 lg:grid-cols-3">
          {collection?.posts.map((post) => {
            return <Post key={post.id} post={post} inCollection />;
          })}
        </div>
      </div>

      {showUpdateCollectionModal && (
        <UpdateCollectionModal
          handleClose={() => setShowUpdateCollectionModal(false)}
          refetch={refetch}
          collection={collection ?? undefined}
        />
      )}

      {showDeleteCollectionModal && (
        <DeleteCollectionModal
          handleClose={() => setShowDeleteCollectionModal(false)}
          collection={collection ?? undefined}
        />
      )}
    </Authentication>
  );
};

export default CollectionPage;
