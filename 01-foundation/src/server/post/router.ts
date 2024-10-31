import { z } from "zod";
import { publicProcedure, router } from "../core/init";
import service from "./services/post.service";

export const postRouter = router({
  getAll: publicProcedure.query(async () => {
    return service.getAll();
  }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        published: z.boolean(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        await service.create(input);
      } catch (err) {
        return { status: "error", error: err };
      }
      return { status: "success" };
    }),
  delete: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    try {
      await service.delete(input);
    } catch (err) {
      return { status: "error", error: err };
    }
    return { status: "success" };
  }),
});
