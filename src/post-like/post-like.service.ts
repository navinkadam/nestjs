import { Injectable } from '@nestjs/common';
import { LikePost } from './post-like.interface';
import { PostService } from 'src/post/post.service';

@Injectable()
export class PostLikeService {
  private _Like: LikePost[] = [];
  constructor(private _postService: PostService) {}
  getLikeByPostIdAndUserId(postId: Number, userId: String) {
    return this._Like.find((l) => l._postId === postId && l.userId === userId);
  }

  getPostLikeCount(postId: Number) {
    return this._Like.filter((l) => l._postId === postId).length;
  }

  likeUnlikePost(payload: Omit<LikePost, '_id'>) {
    this._postService.getPostById(payload._postId);
    const likeResult = this.getLikeByPostIdAndUserId(payload._postId, payload.userId);
    if (!likeResult)
      return this._Like.push({ _id: String(new Date().getTime()), _postId: payload._postId, userId: payload.userId });

    this._Like = this._Like.filter((l) => !(l._postId === payload._postId && l.userId === payload.userId));
  }
}
