import { db } from "../db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
    getAllPosts: publicProcedure
    .query(() => {
        return db.post.findMany()
    })
})