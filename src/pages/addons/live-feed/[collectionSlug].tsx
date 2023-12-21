import { useState, type FC, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import PageMetaTags from "~/components/MetaData/PageMetaTags";
import PostLoader from "~/components/Feature/PostLoader";
import PublicPost from "~/components/Feature/PublicPost";

import { api } from "~/_utils/api";
import { type IPost } from "~/types";

const EmbedPage: FC = () => {
  const router = useRouter();
  const { collectionSlug } = router.query;

  const [displayIdx, setDisplayIdx] = useState(0);

  const { data: collection, isLoading } = api.collections.fetchOne.useQuery({
    id: collectionSlug as string,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (collection?.posts?.length === 0) return;

      if (displayIdx > (collection?.posts?.length ?? 0)) {
        setDisplayIdx(0);
        return;
      }

      setDisplayIdx((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [collection?.posts?.length, displayIdx]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <PageMetaTags title={`roundUP - Live Feed of ${collection?.name}`} />

      {isLoading && <PostLoader />}

      {!isLoading && collection?.posts?.length === 0 && (
        <div className="px-28 py-10 text-center text-lg font-medium">
          Oh no! We couldn't find any posts in this collection.
        </div>
      )}

      {collection?.posts[displayIdx] ? (
        <PublicPost
          key={collection?.posts[displayIdx]?.id}
          post={collection?.posts[displayIdx] as IPost}
        />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/assets/logo.png"
            alt="roundUP Logo"
            width={270}
            height={50}
            className="h-auto w-[270px]"
          />

          <h1 className="mt-8 text-2xl font-medium text-slate-800">
            {collection?.name}
          </h1>
        </div>
      )}
    </div>
  );
};

export default EmbedPage;
