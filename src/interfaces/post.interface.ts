export interface Post {
  _id: string;
  userId: string;
  title?: string;
  image?: string;
  text?: string;
  likes: string[];
  comments: string[];
  createdAt: string;
  updatedAt: string;
}
