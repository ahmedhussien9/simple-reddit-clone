import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { SingleArticleComponent } from './components/single-article/single-article.component';
import { ListArticleComponent } from './components/list-article/list-article.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    CreateArticleComponent,
    SingleArticleComponent,
    ListArticleComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
