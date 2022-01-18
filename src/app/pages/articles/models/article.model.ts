import { IArticle } from '../interfaces/IArticle.interface';

export class Article implements IArticle {

  constructor(public title: string, public link: string, public votes: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  downVote(): void {
    this.votes -= 1;
  }

  upVote(): void {
    this.votes += 1;
  }

  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch {
      return null;
    }
  }
}
