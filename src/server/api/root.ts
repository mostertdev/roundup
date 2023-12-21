import { createTRPCRouter } from "~/server/api/trpc";

import { searchRouter } from "./routers/search";
import { collectionRouter } from "./routers/collections";
import { postRouter } from "./routers/posts";

export const appRouter = createTRPCRouter({
  search: searchRouter,
  collections: collectionRouter,
  posts: postRouter,
});

export type AppRouter = typeof appRouter;
