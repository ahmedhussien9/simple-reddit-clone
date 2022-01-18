import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { INewArticle } from './types/TNewArticle.type';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  add({ title, link }: INewArticle) {
    const newArticle = new Article(title, link, 0);
    console.log(`added new article => ${newArticle}`);
  }
}
