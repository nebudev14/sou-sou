import { z } from "zod";
import { createRouter } from "../create-router";

export const locationRouter = createRouter()
  .mutation("create", {
    input: z.object({
      
    })
  })