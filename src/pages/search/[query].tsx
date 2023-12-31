import { useState, type FC, useEffect } from "react";

import { useRouter } from "next/router";

import Authentication from "~/components/Authentication/Autentication";
import PageMetaTags from "~/components/MetaData/PageMetaTags";
import Header from "~/components/Sections/Header";
import PostLoader from "~/components/Feature/PostLoader";
import Post from "~/components/Feature/Post";

import { api } from "~/_utils/api";

const SearchPage: FC = () => {
  const router = useRouter();
  const { query } = router.query;

  const [search, setSearch] = useState<string>("");

  const { data: posts, isLoading } = api.search.search.useQuery({
    query: search,
  });

  useEffect(() => {
    if (!search) {
      setSearch(query as string);
    }
  }, [query]);

  return (
    <Authentication>
      <div className="flex flex-col">
        <PageMetaTags title={`roundUP - Search Results for ${search}`} />
        <Header withSearch search={search} setSearch={setSearch} />

        <div className="mb-6 mt-12 flex items-center justify-between px-8 xl:px-32">
          {isLoading && (
            <span className="text-sm font-light text-slate-800">
              Loading...
            </span>
          )}

          {!isLoading && (
            <span className="text-sm font-light text-slate-800">
              {posts?.length ?? 0} posts found for "{search}"
            </span>
          )}
        </div>

        {isLoading && <PostLoader />}

        {!isLoading && posts?.length === 0 && (
          <div className="px-8 text-center text-lg font-medium xl:px-28">
            Oh no! We couldn't find any posts matching your search.
          </div>
        )}

        <div className="columns-1 gap-8 space-y-8 px-8 pb-10 md:columns-2 lg:columns-3 xl:px-28">
          {posts?.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </Authentication>
  );
};

export default SearchPage;
