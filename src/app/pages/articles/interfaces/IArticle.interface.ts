export interface IArticle {
  title: string;
  link: string;
  votes: number;
  domainName: string;
  domain: () => string;
  upVote: () => void;
  downVote: () => void;
}
