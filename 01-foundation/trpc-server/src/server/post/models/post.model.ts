import { model } from "mongoose";
import { PostSchema } from "../schemas";
import type { IPost } from "../interfaces/post.interface";

export const Post = model<IPost>("Post", PostSchema);
