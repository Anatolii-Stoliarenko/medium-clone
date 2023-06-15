import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { PopularTagsService } from '../../services/PopularTags.service';
import { GetPopularTagsResponsInterface } from '../../types/getPopularTagsRespons.interface';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from '../actions/getPopularTags.action';

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(({ url }) => {
        return this.popularTagsService.getPopularTags(url).pipe(
          map((tags: GetPopularTagsResponsInterface) => {
            return getPopularTagsSuccessAction({ tags });
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
