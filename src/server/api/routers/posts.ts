import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  fetchOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      const { id } = input;
      return ctx.db.post.findUnique({
        where: { id },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        platform: z.string(),
        image: z.string(),
        likes: z.number(),
        tags: z.string(),
        text: z.string(),
        published: z.string(),
        publisher: z.string(),
        collectionId: z.string().optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const {
        platform,
        image,
        likes,
        tags,
        text,
        published,
        publisher,
        collectionId,
      } = input;
      const post = await ctx.db.post.create({
        data: {
          platform,
          image,
          likes,
          tags,
          text,
          published,
          publisher,
          collectionId,
        },
      });

      return post;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { id } = input;
      const post = await ctx.db.post.delete({
        where: { id },
      });

      return post;
    }),
});
