import { Component, OnInit } from '@angular/core';
import { ARTICLES_DATA } from './data/articles.data';
import { IArticle } from './interfaces/IArticle.interface';
import { Article } from './models/article.model';
import { INewArticle } from './types/TNewArticle.type';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: IArticle[] = ARTICLES_DATA;

  constructor() {}

  ngOnInit(): void {}

  add({ title, link }: INewArticle) {
    const newArticle = new Article(title, link, 0);
    this.articles.push(newArticle);
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
