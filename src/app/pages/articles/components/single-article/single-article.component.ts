import { Component, Input, OnInit } from '@angular/core';
import { ArticleModel } from '../../models/article.model';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss'],
})
export class SingleArticleComponent implements OnInit {
  @Input() article: ArticleModel;

  constructor() {}

  ngOnInit(): void {}

  upVote() {
    this.article.upVote();
  }

  downVote() {
    this.article.downVote();
  }
}
