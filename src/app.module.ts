import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostCommentsController } from './post-comments/post-comments.controller';
import { PostCommentsService } from './post-comments/post-comments.service';
import { PostLikeController } from './post-like/post-like.controller';
import { PostLikeService } from './post-like/post-like.service';

@Module({
  imports: [],
  controllers: [PostController, PostCommentsController, PostLikeController],
  providers: [PostService, PostCommentsService, PostLikeService],
})
export class AppModule {}
