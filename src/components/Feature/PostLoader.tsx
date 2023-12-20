import { type FC } from "react";

const PostLoader: FC = () => {
  return (
    <div className="columns-3 gap-8 space-y-8 px-28 pb-10 md:grid-cols-2 lg:grid-cols-3">
      <div className="h-52 w-full animate-pulse break-inside-avoid-column rounded-xl bg-gray-200" />
      <div className="h-80 w-full animate-pulse break-inside-avoid-column rounded-xl bg-gray-200" />
      <div className="h-72 w-full animate-pulse break-inside-avoid-column rounded-xl bg-gray-200" />
      <div className="h-60 w-full animate-pulse break-inside-avoid-column rounded-xl bg-gray-200" />
      <div className="h-72 w-full animate-pulse break-inside-avoid-column rounded-xl bg-gray-200" />
      <div className="h-52 w-full animate-pulse break-inside-avoid-column rounded-xl bg-gray-200" />
    </div>
  );
};

export default PostLoader;
