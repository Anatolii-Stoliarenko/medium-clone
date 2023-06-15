import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetPopularTagsResponsInterface } from '../types/getPopularTagsRespons.interface';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(url: string): Observable<GetPopularTagsResponsInterface> {
    const fullUrl = 'https://api.realworld.io/api/' + url;
    return this.http.get<GetPopularTagsResponsInterface>(fullUrl);
  }
}
// https://api.realworld.io/api/
// https://conduit.productionready.io/api/
