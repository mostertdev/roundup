import { env } from "~/env.js";
import { z } from "zod";
import type { IDummyData, IDummyPost, IPost } from "~/types";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

const dummyEndpoint = "https://dummyapi.io/data/v1/";

export const searchRouter = createTRPCRouter({
  search: protectedProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      const { query } = input;

      const posts: IPost[] = [];

      await fetch(`${dummyEndpoint}/tag/${query}/post?page=0&limit=50`, {
        headers: {
          "app-id": env.DUMMY_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((res: IDummyData) => {
          res.data.map((post: IDummyPost) => {
            const randomPlatform =
              Math.random() < 0.5 ? "twitter" : "instagram";
            posts.push({
              id: post.id,
              platform: randomPlatform,
              image: post.image,
              likes: post.likes,
              tags: post.tags.map((tag) => "#" + tag.replace(/ /g, "")),
              text: post.text,
              publisher: "@" + post.owner.firstName + post.owner.lastName,
              published: post.publishDate,
            });
          });
        });

      return posts;
    }),
});
