import { Injectable, NotFoundException } from '@nestjs/common';
import { PostService } from '../post/post.service';
import { Comment } from './post-comments.interface';

@Injectable()
export class PostCommentsService {
  private _Comment: Comment[] = [];
  constructor(private _postService: PostService) {}
  addPostComment(postId: Number, payload: Omit<Comment, '_id' | '_postId'>) {
    this._postService.getPostById(postId);
    const comment = { ...payload, _postId: postId, _id: String(new Date().getTime()) };
    this._Comment.push(comment);
    return comment;
  }

  getPostComment(postId: Number): Comment[] {
    return this._Comment.filter((p) => p._postId === postId);
  }

  getSinglePostComment(postId: Number, commentId: String): Comment {
    console.log({ commentId, postId });
    const commentResult = this._Comment.find((p) => p._postId === postId && p._id === commentId);
    if (!commentResult) throw new NotFoundException('Comment not found!');
    return commentResult;
  }

  updateComment(postId: Number, payload: Omit<Comment, 'userId' | '_postId'>): Comment {
    const comment = this.getSinglePostComment(postId, payload._id);
    comment.comment = payload.comment;
    return comment;
  }
}
