import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss'],
})
export class ListArticleComponent implements OnInit {
  @Input() articles: Article[];
  constructor() {}

  ngOnInit(): void {}
}
