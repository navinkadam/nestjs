import { Body, Controller, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostCommentsService } from './post-comments.service';
import { AddComment, EditComment } from './post-comments.dto';

@Controller('post/:postId/comment')
export class PostCommentsController {
  constructor(private _postCommentService: PostCommentsService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  addComment(@Param('postId', ParseIntPipe) postId: Number, @Body() payload: AddComment) {
    return this._postCommentService.addPostComment(postId, payload);
  }

  @Put(':commentId')
  @UsePipes(new ValidationPipe())
  editComment(
    @Param('postId', ParseIntPipe) postId: Number,
    @Param('commentId') commentId: String,
    @Body() payload: EditComment,
  ) {
    return this._postCommentService.updateComment(postId, { ...payload, _id: commentId });
  }
}
