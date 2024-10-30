import { publicProcedure, router } from "../init";
import service from "./services/post.service";

export const postRouter = router({
  getAll: publicProcedure.query(async () => {
    return service.getAll();
  }),
});
