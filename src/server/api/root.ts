import { createTRPCRouter } from "~/server/api/trpc";

import { searchRouter } from "./routers/search";

export const appRouter = createTRPCRouter({
  search: searchRouter,
});

export type AppRouter = typeof appRouter;
