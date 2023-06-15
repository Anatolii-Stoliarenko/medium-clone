import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackaenErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: ArticleInputInterface }>()
);

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const updateArticleFauilreAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAUILRE,
  props<{ errors: BackaenErrorsInterface }>()
);
