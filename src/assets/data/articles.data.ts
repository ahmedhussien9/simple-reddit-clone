import { IArticle } from '../../app/pages/articles/interfaces/IArticle.interface';
import { Article } from '../../app/pages/articles/models/article.model';

export const ARTICLES_DATA: IArticle[] = [
  new Article('Angular', 'http://angular.io', 3),
  new Article('Fullstack', 'http://fullstack.io', 2),
  new Article('Github', 'http://github.com', 1),
];
