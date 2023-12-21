import { type FC } from "react";
import { useRouter } from "next/router";

import PageMetaTags from "~/components/MetaData/PageMetaTags";
import PostLoader from "~/components/Feature/PostLoader";
import PublicPost from "~/components/Feature/PublicPost";

import { api } from "~/_utils/api";

const PostPage: FC = () => {
  const router = useRouter();
  const { postSlug } = router.query;

  const { data: post, isLoading } = api.posts.fetchOne.useQuery({
    id: postSlug as string,
  });

  return (
    <div className="flex h-screen w-screen items-center justify-center p-5">
      <PageMetaTags title={`roundUP - Post Preview`} />

      {isLoading && <PostLoader />}

      {!isLoading && !post && (
        <div className="px-28 py-10 text-center text-lg font-medium">
          Oh no! We couldn't find the posts you're looking for.
        </div>
      )}

      {post && <PublicPost post={post} />}
    </div>
  );
};

export default PostPage;
