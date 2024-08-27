import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostCommentsController } from './post-comments/post-comments.controller';
import { PostCommentsService } from './post-comments/post-comments.service';

@Module({
  imports: [],
  controllers: [PostController, PostCommentsController],
  providers: [PostService, PostCommentsService],
})
export class AppModule {}
