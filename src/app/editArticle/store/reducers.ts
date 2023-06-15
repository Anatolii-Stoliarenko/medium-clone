import { Action, createReducer, on } from '@ngrx/store';
import { EditArticleStateInterface } from './actions/types/createArticleState.interface';
import {
  updateArticleAction,
  updateArticleFauilreAction,
  updateArticleSuccessAction,
} from './actions/updateArticle.action';
import {
  getArticleAction,
  getArticleSuccessAction,
} from './actions/getArticle.action';
import { getArticleFailureAction } from 'src/app/article/store/actions/getFeed.action';

const initialState: EditArticleStateInterface = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  vlidationErrors: null,
};

const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateArticleSuccessAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateArticleFauilreAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      vlidationErrors: action.errors,
    })
  ),
  on(
    getArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true,
      article: null,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: EditArticleStateInterface, action: Action) {
  return editArticleReducer(state, action);
}
