import axios from "axios";
import { z } from "zod";
import { createRouter } from "../create-router";

export const locationRouter = createRouter().mutation("create", {
  input: z.object({
    address: z.string(),
    name: z.string(),
    groupId: z.string(),
    lat: z.number(),
    lng: z.number()
  }),
  async resolve({ input, ctx }) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${input.address}&key=${process.env.REACT_APP_GOOGLE_KEY}`
    )
    .then((response) => {
      return response.json();
    }).then(data => {
      return prisma.location.create({
        data: {
          groupId: input.groupId,
          address: input.address,
          name: input.name,
          lat: input.lat,
          lng: input.lng,
        }
      })
    })
    .catch(err => {
      console.log(err);
    });
  },
});
