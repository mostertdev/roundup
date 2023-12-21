import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const collectionRouter = createTRPCRouter({
  fetchAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.collection.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        posts: true,
      },
    });
  }),

  fetchOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      const { id } = input;
      return ctx.db.collection.findUnique({
        where: { id },
        include: {
          posts: true,
        },
      });
    }),

  create: protectedProcedure
    .input(z.object({ collectionName: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { collectionName } = input;
      const collection = await ctx.db.collection.create({
        data: {
          name: collectionName,
          userId: ctx.session.user.id,
        },
      });
      return collection;
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        collectionName: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { id, collectionName } = input;
      const collection = await ctx.db.collection.update({
        where: { id },
        data: {
          name: collectionName,
        },
      });
      return collection;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { id } = input;
      const collection = await ctx.db.collection.delete({
        where: { id },
      });
      return collection;
    }),
});
