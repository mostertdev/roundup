import { type FC } from "react";
import { useRouter } from "next/router";

import PostLoader from "~/components/Feature/PostLoader";
import PublicPost from "~/components/Feature/PublicPost";

import { api } from "~/_utils/api";

const EmbedPage: FC = () => {
  const router = useRouter();
  const { collectionSlug } = router.query;

  const { data: collection, isLoading } = api.collections.fetchOne.useQuery({
    id: collectionSlug as string,
  });

  return (
    <div className="flex flex-col">
      {isLoading && <PostLoader />}

      {!isLoading && collection?.posts?.length === 0 && (
        <div className="px-28 py-10 text-center text-lg font-medium">
          Oh no! We couldn't find any posts in this collection.
        </div>
      )}

      <div className="columns-3 gap-8 space-y-8 px-28 py-10 md:grid-cols-2 lg:grid-cols-3">
        {collection?.posts.map((post) => {
          return <PublicPost key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default EmbedPage;
