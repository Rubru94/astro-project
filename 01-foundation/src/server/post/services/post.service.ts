import type { IPost } from "../interfaces/post.interface";
import { Post } from "../models/post.model";

class PostService {
  async create(data: IPost): Promise<IPost> {
    try {
      const newPost = await Post.create(data);
      return newPost;
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IPost[]> {
    try {
      const posts = await Post.find({});
      return posts;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string): Promise<IPost> {
    try {
      const post = await Post.findById({ _id: id });
      if (!post) throw new Error("Post not available");
      return post;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update a post by id
   *
   * @async
   * @param {string} id of the object you want to update
   * @param {IPost} data is for the new body you are updating the old one with
   * @returns {Promise<IPost>}
   *
   * {new:true} so the data being returned, is the update one
   */
  async update(id: string, data: IPost): Promise<IPost> {
    try {
      const post = await Post.findByIdAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (!post) throw new Error("Post not available");
      return post;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<IPost> {
    try {
      const post = await Post.findByIdAndDelete(id);
      if (!post) throw new Error("Post not available");
      return post;
    } catch (error) {
      throw error;
    }
  }
}

export default new PostService();
