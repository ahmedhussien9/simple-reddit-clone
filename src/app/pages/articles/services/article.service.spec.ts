import {
  fakeAsync,
  flushMicrotasks,
  inject,
  TestBed,
} from '@angular/core/testing';
import { ArticleService } from './article.service';
/*
Since our service uses HTTP requests, we’ll import the HttpTestingController
class from @angular/common/http/testing package. This class will help us set
expectations and verify HTTP requests.
The last thing we need to import is the class we’re testing:
*/
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { ArticleModel } from '../models/article.model';
import { IAritcleSchema } from '../interfaces/IArticle.interface';

describe('ArticleService', () => {
  let articleService: ArticleService;
  let httpTestingController: HttpTestingController;

  let articleMock: ArticleModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticleService],
    });
    articleService = TestBed.get(ArticleService);
    httpTestingController = TestBed.get(HttpTestingController);
    articleMock = new ArticleModel('Angular', 'http://angular.io', 3);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should call article service ', inject(
    [ArticleService],
    (service: ArticleService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should return articles from the API via GET', fakeAsync(
    inject([ArticleService], (service: ArticleService) => {
      let articles: ArticleModel[];
      let mockData: IAritcleSchema[] = [
        {
          title: 'Angular',
          link: 'http://angular.io',
          votes: 3,
        },
        {
          title: 'Fullstack',
          link: 'http://fullstack.io',
          votes: 2,
        },
        {
          title: 'Github',
          link: 'http://github.com',
          votes: 3,
        },
      ];
      service.getArticlesApi().subscribe((articlesData: ArticleModel[]) => {
        articles = articlesData;
        expect(articles.length).toBe(3);
        expect(articles[0]).toEqual(articleMock);
        expect(articles[0].title).toBe(articleMock.title);
        expect(articles[0].domain).toBe(articleMock.domain);
        expect(articles[0].link).toBe('http://angular.io');
      });
      const request = httpTestingController.expectOne(
        '/assets/data/articles.data.json'
      );
      expect(request.request.method).toBe('GET');
      expect(request.request.url).toEqual('/assets/data/articles.data.json');
      console.log(request.request.url);
      request.flush(mockData);
    })
  ));
});
