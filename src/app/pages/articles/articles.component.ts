import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { IArticle } from './interfaces/IArticle.interface';
import { Article } from './models/article.model';
import { ArticleService } from './services/article.service';
import { INewArticle } from './types/TNewArticle.type';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: IArticle[] = [];
  private $destroy = new Subject();
  constructor(private _articleService: ArticleService) {}

  ngOnInit(): void {
    this._articleService
      .getArticlesApi()
      .pipe(
        takeUntil(this.$destroy),
        tap((articles: Article[]) => {
          this.articles = articles;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.$destroy.next();
    this.$destroy.complete();
  }

  addNewArticle({ title, link }: INewArticle) {
    const newArticle = new Article(title, link, 0);
    this.articles.push(newArticle);
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
