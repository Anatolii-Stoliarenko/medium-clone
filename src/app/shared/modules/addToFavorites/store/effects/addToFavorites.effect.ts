import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  addToFavoriteSuccessAction,
  addToFavoritesAction,
  addToFavoritesFailureAction,
} from '../actions/addToFavorites.action';
import { AddToFavoritesServise } from '../../services/addToFavorites.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

@Injectable()
export class addToFavoritesEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoritesServise.removeFromFavorites(slug)
          : this.addToFavoritesServise.addToFavorites(slug);

        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoriteSuccessAction({ article });
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private addToFavoritesServise: AddToFavoritesServise
  ) {}
}
