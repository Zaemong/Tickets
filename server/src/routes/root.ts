import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "../trpc";
import { postRouter } from "./post";
import { createCallerFactory } from "../trpc";

export const appRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ name: z.string() })).query((req) => {
    return `Hello ${req.input.name}!`;
  }),
  posts: postRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
