import { createTRPCRouter } from "~/server/api/trpc";

import { searchRouter } from "./routers/search";
import { collectionRouter } from "./routers/collections";

export const appRouter = createTRPCRouter({
  search: searchRouter,
  collections: collectionRouter,
});

export type AppRouter = typeof appRouter;
