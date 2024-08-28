import { IsNotEmpty } from 'class-validator';

export class LikePost {
  @IsNotEmpty()
  userId: String;
}
