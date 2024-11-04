import { model } from "mongoose";
import type { IPost } from "../interfaces/post.interface";
import { PostSchema } from "../schemas/post.schema";

export const Post = model<IPost>("Post", PostSchema);
