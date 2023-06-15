import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetArticleResponseInterface } from '../types/getArticleResponse.interface';
import { ArticleInterface } from '../types/article.interface';

@Injectable()
export class ArticleService {
  urlApi: string = 'https://api.realworld.io/api/articles/';

  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${this.urlApi}${slug}`;
    return this.http
      .get<GetArticleResponseInterface>(fullUrl)
      .pipe(map((response) => response.article));
  }
}
