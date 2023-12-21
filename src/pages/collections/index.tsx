import { useState, type FC } from "react";

import Authentication from "~/components/Authentication/Autentication";
import PageMetaTags from "~/components/MetaData/PageMetaTags";
import Header from "~/components/Sections/Header";
import CreateCollectionModal from "~/components/Feature/CreateCollectionModal";
import Collection from "~/components/Feature/Collection";

import { api } from "~/_utils/api";

const CollectionsManagerPage: FC = () => {
  const [showCreateCollectionModal, setShowCreateCollectionModal] =
    useState(false);

  const {
    data: collections,
    isLoading,
    refetch,
  } = api.collections.fetchAll.useQuery();

  return (
    <Authentication>
      <div className="flex flex-col">
        <PageMetaTags title="roundUP - Collections" />
        <Header />

        <div className="mb-6 mt-12 flex items-center justify-between px-32">
          <h2 className="text-xl font-medium text-slate-800">
            {collections?.length} Collections
          </h2>

          <span className="flex cursor-pointer items-center justify-center space-x-1 font-light text-slate-800 hover:underline">
            <button
              onClick={() => setShowCreateCollectionModal(true)}
              className="rounded-full bg-slate-800 px-9 py-3 font-semibold text-white hover:bg-slate-900 focus:outline-none"
            >
              + New Collections
            </button>
          </span>
        </div>

        {!isLoading && collections?.length === 0 && (
          <div className="px-28 text-center text-lg font-medium">
            No collections found. Create a new one!
          </div>
        )}

        <div className="px-28">
          <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-left text-slate-800">
              <tbody>
                {collections?.map((collection) => {
                  return (
                    <Collection
                      key={collection.id}
                      collection={collection}
                      refetch={refetch}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showCreateCollectionModal && (
        <CreateCollectionModal
          handleClose={() => setShowCreateCollectionModal(false)}
          refetch={refetch}
        />
      )}
    </Authentication>
  );
};

export default CollectionsManagerPage;
