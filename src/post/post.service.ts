import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './post.interface';

@Injectable()
export class PostService {
  private _Posts: Post[] = [];
  getPosts() {
    return this._Posts;
  }

  getPostById(postId: Number): Post | undefined {
    const postResult = this._Posts.find((p) => p._id === postId);
    if (!postResult) throw new NotFoundException('Post Not Found');
    return postResult;
  }

  createPost(body: Omit<Post, '_id'>): Post {
    const _body = { ...body, _id: new Date().getTime(), likes: [], comments: [] };
    this._Posts.push(_body);
    return _body;
  }

  deletePostById(postId: Number) {
    this._Posts = this._Posts.filter((p) => p._id !== postId);
    return this._Posts;
  }
}
