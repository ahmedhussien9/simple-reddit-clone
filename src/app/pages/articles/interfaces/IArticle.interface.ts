export interface IArticle {
  title: string;
  link: string;
  votes: number;
  domain: () => string;
  upVote: () => void;
  downVote: () => void;
}
