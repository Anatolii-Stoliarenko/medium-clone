import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { GetArticleResponseInterface } from 'src/app/shared/types/getArticleResponse.interface';

@Injectable()
export class AddToFavoritesServise {
  urlApi: string = 'https://api.realworld.io/api/articles/';

  constructor(private http: HttpClient) {}

  getArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article;
  }
  addToFavorites(slug: string): Observable<ArticleInterface> {
    const fulUrl = this.getUrl(slug);
    return this.http.post(fulUrl, {}).pipe(map(this.getArticle));
  }

  removeFromFavorites(slug: string) {
    const fulUrl = this.getUrl(slug);
    return this.http.delete(fulUrl).pipe(map(this.getArticle));
  }

  getUrl(slug: string): string {
    return `${this.urlApi}${slug}/favorite`;
  }
}
