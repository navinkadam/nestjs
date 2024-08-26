export interface Post {
  _id: Number;
  title: String;
  description: String;
  userId: String;
  likes: String[];
  comments: Comment[];
}

export interface Comment {
  user: String;
  comment: String;
}
