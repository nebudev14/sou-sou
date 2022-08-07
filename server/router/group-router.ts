import { createRouter } from "../create-router";
import { z } from "zod";

export const groupRouter = createRouter()
  .mutation("create", {
    input: z.object({
      name: z.string()
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.group.create({
        data: {
          name: input.name
        }
      })
    }
  });