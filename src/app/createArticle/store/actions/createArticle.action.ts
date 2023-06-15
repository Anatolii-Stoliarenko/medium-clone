import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackaenErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const createArticleFauilreAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAUILRE,
  props<{ errors: BackaenErrorsInterface }>()
);
