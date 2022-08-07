import { createRouter } from "../create-router";
import { groupRouter } from "./group-router";
import { locationRouter } from "./location-router";

export const appRouter = createRouter()
  .merge("group.", groupRouter)
  .merge("location.", locationRouter);

export type AppRouter = typeof appRouter;