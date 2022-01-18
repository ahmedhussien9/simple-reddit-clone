import { IArticle } from '../interfaces/IArticle.interface';
import { Article } from '../models/article.model';

export const ARTICLES_DATA: IArticle[] = [
  new Article('Angular', 'http://angular.io', 3),
  new Article('Fullstack', 'http://fullstack.io', 2),
  new Article('Angular Homepage', 'http://angular.io', 1),
];
