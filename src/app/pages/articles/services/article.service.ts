import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly baseUrl = '/assets/data/';
  constructor(private httpClient: HttpClient) {}

  public getArticlesApi(): Observable<Article[]> {
    return this.httpClient
      .get<Article[]>(`${this.baseUrl}articles.data.json`)
      .pipe(
        startWith([]),
        filter((articles) => articles.length > 0),
        map((articles: Article[]) => {
          return articles.map((article: Article) => {
            return new Article(article.title, article.link, article.votes);
          });
        })
      );
  }
}
