import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../types/getFeedResponce.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = 'https://api.realworld.io/api' + url;
    return this.http.get<GetFeedResponseInterface>(fullUrl);
  }
}

/* https://api.realworld.io/api/
https://conduit.productionready.io/api */
