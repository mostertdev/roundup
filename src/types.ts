export interface IDummyData {
  data: IDummyPost[];
}

export interface IDummyPost {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: IDummyUser;
}

export interface IDummyUser {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface IPost {
  id: string;
  platform: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  published: string;
  publisher: string;
}
