import { Injectable } from '@nestjs/common';
import { Post } from './post.interface';

@Injectable()
export class PostService {
  private _Posts: Post[] = [];
  getPosts() {
    return this._Posts;
  }

  getPostById(postId: Number): Post | undefined {
    return this._Posts.find((p) => p._id === postId);
  }

  createPost(body: Omit<Post, '_id' | 'likes' | 'comments'>): Post {
    const _body = { ...body, _id: new Date().getTime(), likes: [], comments: [] };
    this._Posts.push(_body);
    return _body;
  }

  deletePostById(postId: Number) {
    this._Posts = this._Posts.filter((p) => p._id !== postId);
    return this._Posts;
  }
}
