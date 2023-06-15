import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  //return empty row/line
  deleteArticle(slug: string): Observable<{}> {
    const url = `https://api.realworld.io/api/articles/${slug}`;
    return this.http.delete<{}>(url);
  }
}
