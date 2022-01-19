import { ArticleModel } from './article.model';

describe('Article Model', () => {
  let article: ArticleModel;

  beforeEach(() => {
    article = new ArticleModel('Angular', 'https://bing.com/', 2);
  });

  it('should run Article Model spec file', () => {
    expect(true).toBe(true);
  });

  it('should test the upvote', () => {
    article.upVote();
    expect(article.votes).toBe(3);
  });

  it('should test the downvote', () => {
    article.downVote();
    expect(article.votes).toBe(1);
  });

  it('should test the domain name', () => {
    expect(article.domainName).toBe('bing.com');
  });
});
