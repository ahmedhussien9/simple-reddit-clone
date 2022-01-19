export interface IArticle extends IAritcleSchema {
  domainName: string;
  domain: () => string;
  upVote: () => void;
  downVote: () => void;
}

export interface IAritcleSchema {
  title: string;
  link: string;
  votes: number;
}
