export interface IData {
  data: IPost[];
  total: number;
  page: number;
  limit: number;
}

export interface IPost {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: IUser;
}

export interface IUser {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}
