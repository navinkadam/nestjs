import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { PostCommentsService } from '../post-comments/post-comments.service';
import { CreatePost } from './post.dto';

@Controller('post')
export class PostController {
  constructor(
    private _postService: PostService,
    private _postCommentService: PostCommentsService,
  ) {}
  @Get()
  getPosts() {
    return this._postService.getPosts();
  }

  @Get(':postId')
  getPostById(@Param('postId', ParseIntPipe) postId: Number) {
    const postData = this._postService.getPostById(postId);
    const postComment = this._postCommentService.getPostComment(postId);
    return {
      ...postData,
      comments: postComment,
    };
  }

  @Delete(':postId')
  deletePostById(@Param('postId', ParseIntPipe) postId: Number) {
    return this._postService.deletePostById(postId);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createPost(@Body() postBody: CreatePost) {
    return this._postService.createPost(postBody);
  }
}
