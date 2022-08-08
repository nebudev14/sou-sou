import { createRouter } from "../create-router";
import { z } from "zod";
import { truncate } from "fs";

export const groupRouter = createRouter()
  .mutation("create", {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.group.create({
        data: {
          name: input.name,
          users: {
            connect: {
              id: ctx.session!.user.id,
            },
          },
        },
      });
    },
  })
  .query("get-by-user", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.group.findMany({
        where: {
          userIds: {
            has: input.id,
          },
        },
        include: {
          locations: true,
          users: true,
        },
      });
    },
  });
