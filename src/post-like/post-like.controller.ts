import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostLikeService } from './post-like.service';
import { LikePost } from './post-like.dto';

@Controller('post/:postId/like')
export class PostLikeController {
  constructor(private _postLike: PostLikeService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  addLike(@Param('postId', ParseIntPipe) postId: Number, @Body() body: LikePost) {
    this._postLike.likeUnlikePost({ ...body, _postId: postId });
  }

  @Get('count')
  getPostLikeCount(@Param('postId', ParseIntPipe) postId: Number) {
    return this._postLike.getPostLikeCount(postId);
  }
}
