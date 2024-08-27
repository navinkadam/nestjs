import { IsNotEmpty } from 'class-validator';

export class CreatePost {
  @IsNotEmpty()
  title: String;
  @IsNotEmpty()
  description: String;
  @IsNotEmpty()
  userId: String;
}
