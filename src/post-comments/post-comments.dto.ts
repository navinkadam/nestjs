import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class AddComment {
  @IsNotEmpty()
  userId: String;
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(10)
  comment: String;
}

export class EditComment {
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(10)
  comment: String;
}
