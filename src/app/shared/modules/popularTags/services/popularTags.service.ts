import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTagType';
import { GetPopularTagsResponsInterface } from '../types/getPopularTagsResponse.interface';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = 'https://api.realworld.io/api/tags';

    return this.http.get(url).pipe(
      map((response: GetPopularTagsResponsInterface) => {
        return response.tags;
      })
    );
  }
}
// https://api.realworld.io/api/
// https://conduit.productionready.io/api
