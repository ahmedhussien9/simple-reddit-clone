import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { ArticleModel } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly baseUrl = '/assets/data/';
  constructor(private httpClient: HttpClient) {}

  public getArticlesApi(): Observable<ArticleModel[]> {
    return this.httpClient
      .get<ArticleModel[]>(`${this.baseUrl}articles.data.json`)
      .pipe(
        startWith([]),
        filter((articles) => articles.length > 0),
        map((articles: ArticleModel[]) => {
          return articles.map((article: ArticleModel) => {
            return new ArticleModel(article.title, article.link, article.votes);
          });
        })
      );
  }
}
