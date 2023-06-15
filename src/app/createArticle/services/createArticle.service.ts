import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { SaveArticleResponseInterface } from 'src/app/shared/types/saveArticleResponse.interface';

@Injectable()
export class CreateAticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const url = 'https://api.realworld.io/api/articles';
    return this.http
      .post<SaveArticleResponseInterface>(url, { article: articleInput })
      .pipe(map((response: SaveArticleResponseInterface) => response.article));
  }
}
// https://api.realworld.io/api/articles
// https://conduit.productionready.io/api/articles/
