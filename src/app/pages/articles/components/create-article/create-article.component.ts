import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { INewArticle } from '../../types/TNewArticle.type';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  @Output() isNewArticleData: EventEmitter<INewArticle> =
    new EventEmitter<INewArticle>();

  constructor() {}

  ngOnInit(): void {}

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    if (!title.value || !link.value) {
      alert('Please make sure to enter the required fields');
      return;
    }
    this.isNewArticleData.emit({
      title: title.value,
      link: link.value,
    } as INewArticle);
  }
}
